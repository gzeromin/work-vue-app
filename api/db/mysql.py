import pymysql

MYSQL_HOST = 'localhost'
MYSQL_CONN = db_conn = pymysql.connect(
  host=MYSQL_HOST,
  port=3306,
  user='jymin',
  passwd='password',
  db='work-vue-app',
  charset='utf8',
  cursorclass=pymysql.cursors.DictCursor
)

def conn_db():
  if not MYSQL_CONN.open:
      MYSQL_CONN.ping(reconnect=True)
  return MYSQL_CONN