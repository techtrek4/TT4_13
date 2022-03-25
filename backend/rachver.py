from flask import Flask
from flask import request
import mysql.connector
from flask import jsonify
from copy import copy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

USERNAME = 'root'
PASSWORD = 'xxxx'
HOST = 'localhost'

connection = mysql.connector.connect(
    user=USERNAME,
    password=PASSWORD,
    host=HOST,
    database='loan_management')

cursor = connection.cursor()

@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/login_auth')
def login_auth():

    username = request.args.get('username', type=str)
    password = request.args.get('password', type=str)

    sql_statement = 'select customer.CustomerId, customer.customer_name, customer.password, customer.username from customer where customer.username = "{}"'.format(username)
    print(sql_statement)
    cursor.execute(sql_statement)
    row = cursor.fetchone()

    print(row)

    dbpassword = row[2]

    print(password)
    print(dbpassword)
    if (password == dbpassword):
        message="success"
    else:
        message="wrong password"
    
    payload = {
        "message" : message,
        "payload": row,
    }

    to_send = { 
        "message": message,
        "payload": payload,
        "status_code": 200
        }
    
    return jsonify(to_send)

@app.route('/create_customer')
def create_customer():

    username = request.args.get('username', type=str)
    password = request.args.get('password', type=str)

    sql_statement = 'select customer.CustomerId, customer.customer_name, customer.password, customer.username from customer where customer.username = "farrah123"'

    cursor.execute(sql_statement)
    row = cursor.fetchone()

    message="success"
    payload = {
        "message" : "success",
        "payload": row,
    }

    to_send = { 
        "message": message,
        "payload": payload,
        "status_code": 200
        }
    
    return jsonify(to_send)


# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
    # read_loan_amount()

