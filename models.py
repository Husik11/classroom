from flask_login import UserMixin
from flask_security import RoleMixin
from app import db
from helpers import generate_hash
from datetime import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(100), nullable=False)
    # birtday = db.Column(db.DateTime, nullable=False)
    create_date = db.Column(db.Date, nullable=False, default=datetime.utcnow)
    roles = db.relationship('Role', secondary='roles_users',
                            backref=db.backref('users', lazy='dynamic'))
    progresses = db.relationship('Progress', backref='user', lazy='dynamic')
    full_progresses = db.relationship('FullProgress', backref='user', lazy='dynamic')

    # active = db.Column(db.Boolean, unique=False, server_default=0)

    def __init__(self, firstname, lastname, username, password, email, phone):
        self.firstname = firstname
        self.lastname = lastname
        self.username = username
        self.password = password
        self.email = email
        self.phone = phone
        # self.birtday = birtday


class Role(db.Model):
    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(50), nullable=False, unique=True)

    def __init__(self, role_name):
        self.role_name = role_name


class UserRoles(db.Model, RoleMixin):
    __tablename__ = 'roles_users'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column('user_id', db.Integer, db.ForeignKey('user.id'))
    role_id = db.Column('role_id', db.Integer, db.ForeignKey('role.id'))


class Progress(db.Model):
    __tablename__ = 'progress'
    id = db.Column(db.Integer, primary_key=True)
    progress_value = db.Column(db.Integer, nullable=False, default=0)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)  # TODO write table name
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # TODO write table name


class FullProgress(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    progress_value = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)


class Course(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    course_name = db.Column(db.String(50), nullable=False)  # TODO progress reference, topic reference
    progresses = db.relationship('Progress', backref='course', lazy='dynamic')
    topics = db.relationship('Topic', backref='course', lazy='dynamic')


class Topic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    topic_name = db.Column(db.String(100), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)  # TODO subtopic reference
    subtopics = db.relationship('Subtopic', backref='topic', lazy='dynamic')


class Subtopic(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    subtopic_name = db.Column(db.String(255), nullable=False)
    topic_id = db.Column(db.Integer, db.ForeignKey('topic.id'), nullable=False)
    questions = db.relationship('Question', backref='subtopic', lazy='dynamic')
    exercises = db.relationship('Exercise', backref='subtopic', lazy='dynamic')
    subtopicgroups = db.relationship('SubTopicGroup', backref='subtopic', lazy='dynamic')


class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    groupname = db.Column(db.String(50), nullable=False)
    subtopicgroups = db.relationship('SubTopicGroup', backref='group', lazy='dynamic')


class SubTopicGroup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), nullable=False)
    subtopic_id = db.Column(db.Integer, db.ForeignKey('subtopic.id'), nullable=False)


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question_context = db.Column(db.Text, nullable=False)
    subtopic_id = db.Column(db.Integer, db.ForeignKey('subtopic.id'), nullable=False)
    trueanswers = db.relationship('TrueAnswer', backref='question', lazy='dynamic')
    falseanswers = db.relationship('FalseAnswer', backref='question', lazy='dynamic')


class TrueAnswer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer_context = db.Column(db.Text, nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)  # TODO


class FalseAnswer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer_context = db.Column(db.Text, nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'), nullable=False)  # TODO


class Exercise(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_context = db.Column(db.Text, nullable=False)
    subtopic_id = db.Column(db.Integer, db.ForeignKey('subtopic.id'), nullable=False)  # TODO


def create_superuser():
    user = User(firstname='admin',
                lastname='admin',
                username='admin',
                password=generate_hash('123456'),
                email='admin@admin.am',
                phone='123456',
                birtday='1985-07-21')
    db.session.add(user)
    db.session.commit()
