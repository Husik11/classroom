from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_login import LoginManager
from flask_wtf.csrf import CSRFProtect

from config import DevEnvConfig

app = Flask(__name__)
app.config.from_object(DevEnvConfig)
db = SQLAlchemy()
db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)


# csrf = CSRFProtect(app)


def create_db():
    with app.app_context():
        db.create_all()


def create_default_user():
    user = User(firstname='admin',
                lastname='admin',
                username='admin',
                email='admin@admin.am',
                password=generate_hash('123456'),
                phone='123456')
    db.session.add(user)
    db.session.commit()


from views import *

if __name__ == '__main__':
    app.run()
