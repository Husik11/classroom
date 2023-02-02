from flask import render_template, request, redirect, url_for
from flask_login import login_user, logout_user, login_required, current_user
from forms import LoginForm, RegisterForm
from flask_security import roles_required

from app import app, db, login_manager
from models import User, Course, Progress, FullProgress
from helpers import generate_hash


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


@app.route('/admin', methods=['GET', 'POST'])
@app.route('/admin/', methods=['GET', 'POST'])
def admin():
    form = LoginForm()
    if request.method == 'POST':
        data = request.form
        username = data['username']
        user = User.query.filter_by(username=username).first()
        if user:
            if data['username'] == user.username and generate_hash(data['password']) == user.password:
                login_user(user)
                return redirect(url_for('admin_dashboard', username=user.username))
            else:
                error_message = 'Wrong password'
                return render_template('admin/loginform/index.html', form=form, error=error_message)
        else:
            error_message = 'Wrong username'
            return render_template('admin/loginform/index.html', form=form, error=error_message)
    return render_template('admin/loginform/index.html', form=form)


@app.route('/admin/logout')
def admin_logout():
    logout_user()
    return redirect(url_for('admin'))


@app.route('/admin/dashboard')
@app.route('/admin/dashboard/<username>')
# @login_required
def admin_dashboard(username):
    users = User.query.all()
    form = RegisterForm()
    return render_template('admin/dashboard/index.html', username=username, users=users, form=form)


@app.route('/admin/dashboard_css/delete/<user_id>')
# @login_required
def admin_delete_user(user_id):
    user = User.query.filter_by(id=user_id)
    db.session.delete(user)
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@app.route('/admin/daashboard/edit/<user_id>')
# @login_required
def admin_edit_user(user_id):
    user = User.query.filter_by(id=user_id)
    data = request.form  # TODO chack from form data can not be empty
    user.firstname = data['firstname']
    user.lastname = data['lastname']
    user.username = data['lastname']
    user.email = data['email']
    user.phone = data['phone']
    db.session.commit()
    return redirect(url_for('admin_dashboard'))


@app.route('/admin/register', methods=['POST'])
# @login_required
def admin_register():
    # form = RegisterForm()
    if request.method == 'POST':
        data = request.form
        # if form.validate_on_submit():
        user = User(firstname=data['firstname'],
                    lastname=data['lastname'],
                    username=data['username'],
                    password=generate_hash(data['password']),
                    email=data['email'],
                    phone=data['phone'])

        db.session.add(user)
        db.session.commit()
        added_user = User.query.filter_by(username=user.username).first()
        added_user_id = added_user.id
        fullprogress = FullProgress(progress_value=0, user_id=added_user_id)
        db.session.add(fullprogress)
        db.session.commit()
    username = current_user.username
    return redirect(url_for('admin_dashboard', username=username))

    # return render_template('admin/user_register_form.html', form=form)


@app.route('/')
def index():
    form = LoginForm()
    return render_template('application/loginform/index.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if request.method == 'POST':
        data = request.form
        user = User.query.filter_by(username=data['username']).first()
        if user:
            if data['username'] == user.username and generate_hash(data['password']) == user.password:
                login_user(user)
                return redirect(url_for('dashboard', username=user.username))
            else:
                error_message = 'Wrong password'
                return render_template('application/loginform/index.html', form=form, error=error_message)
        else:
            error_message = 'Wrong username'
            return render_template('application/loginform/index.html', form=form, error=error_message)
    return render_template('application/loginform/index.html', form=form)


@app.route('/dashboard', defaults={'username': 'admin'})
@app.route('/dashboard/<username>')
# @login_required
def dashboard(username):
    courses = Course.query.all()
    users = User.query.all()  # TODO filter by student
    for user in users:
        usr = User.query.filter_by(username=user.username).first()
        usr_id = usr.id
        fullprg = FullProgress.query.filter_by(id=usr_id).first()
        user.fullprogress = fullprg.progress_value
    return render_template('application/mentor/menthorspage/index.html', username=username, courses=courses,
                           users=users)

@app.route('/courses', defaults = {'course_name':''})
@app.route('/courses/<course_name>')
def courses(course_name):
    username = current_user.username
    if not course_name:
        return render_template('application/mentor/coursespage/index.html', username=username)

@app.route('/course/add')
# @login_required
def course_add():
    pass


@app.route('/course/add_source')
# @login_required
def course_add_course():
    pass


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))
