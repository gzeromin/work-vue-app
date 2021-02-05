from db.mysql import conn_db
from flask_login import UserMixin
from flask_bcrypt import Bcrypt

class User(UserMixin):
  def __init__(self, user):
    print(user)
    self.id = user["id"]
    self.employeeNo = user["employeeNo"]
    self.name = user["name"]
    self.hurigana = user["hurigana"]
    self.email = user["email"]
    self.password = user["password"]
    self.role = user["role"]
    self.managerNo = user["managerNo"]

  def get_id(self):
    return str(self.id)
  
  def to_dict(self):
    return {
      "id" : self.id,
      "employeeNo" : self.employeeNo,
      "name" : self.name,
      "hurigana" : self.hurigana,
      "email" : self.email,
      "password" : self.password,
      "role" : self.role,
      "managerNo" : self.managerNo
    }

  @staticmethod
  def get(id):
    db = conn_db()
    db_cursor = db.cursor()
    sql = "SELECT * FROM user WHERE id = '" + str(id) + "'"
    db_cursor.execute(sql)
    user = db_cursor.fetchone()
    db_cursor.close()
    if not user:
      return None
    return User(user)

  @staticmethod
  def find(email):
    db = conn_db()
    db_cursor = db.cursor()
    sql = "SELECT * FROM user WHERE email = '" + str(email) + "'"
    db_cursor.execute(sql)
    user = db_cursor.fetchone()
    db_cursor.close()
    if not user:
      return None
    return User(user)


  def comparePassword(self, password):
    if(self.password == password):
      return True
    return False

  def hashPassword():
    bcrypt = Bcrypt()

  