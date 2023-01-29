from flask_login import UserMixin
from flask_security import RoleMixin
from app import db
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
    # create_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    roles = db.relationship('Role', secondary='roles_users',
                            backref=db.backref('users', lazy='dynamic'))

    # active = db.Column(db.Boolean, unique=False, server_default=0)

    def __init__(self, firstname, lastname, username, password, email, phone, birtday):
        self.firstname = firstname
        self.lastname = lastname
        self.username = username
        self.password = password
        self.email = email
        self.phone = phone
        self.birtday = birtday


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


# class Progres(db.Model):
#     __tablename__ = 'progress'
#     id = db.Column(db.Integer, primary_key=True)
#     # progress_value = db.Column(db.Integet, nullable=False, default=0)
#     course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)  # TODO write table name
#     user_id = db.Column(db.Integer, db.ForeignKey(''), nullable=False)  # TODO write table name
#
#
# class Course(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     course_name = db.Column(db.String(50), nullable=False)  # TODO progress reference, topic reference
#
#
# class Topic(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     topic_name = db.Column(db.String(100), nullable=False)
#     course_id = db.Column(db.Integer, db.ForeignKey('course.id'), nullable=False)  # TODO subtopic reference
#
#
# class Subtopic(db.Model):
#     id = db.Column(db.Integer, primary_key=False)
#     subtopic_name = db.Column(db.Integer, nullable=False)
#     topic_id = db.Column(db.Integer, db.ForeignKey(''), nullable=False)  # TODO reference question, excersise, subtopicgroup
#
#
# class Question(db.Model):
#     id = db.Column(db.Integer, primery_key=True)

