from flask import Flask, request, session
import os
from flask_cors import CORS
from flask_login import LoginManager
from controller import user
from models.User import User

# https 만을 지원하는 기능을 http 에서 테스트할 때 필요한 설정
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

app = Flask(__name__)
CORS(app)
app.secret_key = 'jymin_server'

app.register_blueprint(user.app, url_prefix='/api/user')
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.session_protection = 'strong'

@login_manager.user_loader
def load_user(id):
  return User.get(id)

@app.route('/api')
def hello_world():
  return 'Hello, World!'

