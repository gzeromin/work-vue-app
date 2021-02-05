from flask import Blueprint, request
from flask_restful import Resource, Api
from models.User import User
from flask_login import login_user, current_user, logout_user
import datetime

app = Blueprint('user', __name__)
api = Api(app)

class login(Resource):
  def post(self):
    body = request.get_json()
    user = User.find(body["email"])
    if user:
      if user.comparePassword(body["password"]):
        login_user(user, remember=True, duration=datetime.timedelta(days=1))
        return {"success": True, "result": user.to_dict() }
      else:
        return {"success": False, "err": "Password is not correct"}
    return {"success": False, "err": "There is no user"}
api.add_resource(login, '/login')

class auth(Resource):
  def get(self):
    if current_user.is_authenticated:
      return {"success": True, "result": current_user.to_dict()}
    return {"success": False}
api.add_resource(auth, '/auth')

class logout(Resource):
  def get(self):
    logout_user()
    return True
api.add_resource(logout, '/logout')

