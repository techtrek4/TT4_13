from flask import Flask
from flask import request
import mysql.connector

app = Flask(__name__)

# CONFIGURE YOUR ENV HERE
USERNAME = 'jaivigneshvenugopal'
PASSWORD = ''
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


@app.route('/create_loan')
def create_loan():
    customer_id = request.args.get('CustomerId', type=int)
    loan_amount = request.args.get('loan_amount', type=int)

    sql_statement = ''

    cursor.execute(sql_statement)
    connection.commit()

@app.route('/create-customer')
def create_customer():
    username = request.args.get('customerUser', type=str)
    password = request.args.get('customerPassword', type=str)
    name = request.args.get('customerFullName', type=str)
    phone = request.args.get('customerPhone', type=str)
    address = request.args.get('customerAddress', type=str)

    sql_statement = 'INSERT INTO CUSTOMER (customer_name, customer_phone, customer_address, username, password) VALUES "{}", "{}", "{}", "{}", "{}"'
    sql_statement.format(name, phone, address, username, password)

    cursor.execute(sql_statement)
    connection.commit()

# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application
    # on the local development server.
    app.run()


