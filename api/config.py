import os.path

current_path = os.path.dirname(__file__)

class Config:
    SQLALCHEMY_DATABASE_URI = ""
    SECRET_KEY = 'secret-key'
    SECURITY_FRESHNESS_GRACE_PERIOD = 3600
    SECURITY_DEFAULT_REMEMBER_ME = True
    SECURITY_REGISTERABLE = True
    # JWT_SECRET_KEY = 'secret_very_secret'




class DevEnvConfig(Config):
    HOST = '0.0.0.0'
    PORT = 5000
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{current_path}/classroom.db"
    UPLOAD_FOLDER = os.path.join(current_path, 'videos')




if __name__ == "__main__":
    print(current_path)
