import os.path

current_path = os.path.dirname(__file__)

class Config:
    SQLALCHEMY_DATABASE_URI = ""
    SECRET_KEY = 'secret-key'
    SECURITY_FRESHNESS_GRACE_PERIOD = 3600
    SECURITY_DEFAULT_REMEMBER_ME = True
    SECURITY_REGISTERABLE = True
    JWT_SECRET_KEY = 'secret'




class DevEnvConfig(Config):
    HOST = '127.0.0.1'
    PORT = 5000
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:////home/davit/Desktop/projects/personal/classroom/api/classroom.db"
    UPLOAD_FOLDER = os.path.join(current_path, 'videos')




