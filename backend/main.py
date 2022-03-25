from flask import Flask
from flask import request
import mysql.connector
from flask import jsonify

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
def entry_point():
    return 'Backend is live -- Running!'


@app.route('/create_loan')
def create_loan():
    customer_id = request.args.get('CustomerId', type=int)
    loan_amount = request.args.get('loan_amount', type=float)
    loan_id = None

    sql_statement = ''

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    connection.commit()
    to_send = {
        "status_code": 200,
        "message": "success",
    }
    return jsonify(to_send)


@app.route('/create_payment')
def create_payment():
    customer_id = request.args.get('CustomerId', type=int)
    loan_id = request.args.get('LoanId', type=int)
    loan_amount = request.args.get('payment_amount', type=float)
    payment_id = None
    payment_date = None

    sql_statement = ''

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    connection.commit()
    to_send = {
        "status_code": 200,
        "message": "success",
    }
    return jsonify(to_send)


@app.route('/read_balance')
def read_balance():
    customer_id = request.args.get('CustomerId', type=int)
    sql_statement = """SELECT balance FROM customer WHERE CustomerId={};""".format(customer_id)

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    balance = cursor.fetchone()[0]
    message = "success"
    payload = {
        "message": "success",
        "payload": balance,
    }

    to_send = {
        "message": message,
        "payload": payload,
        "status_code": 200
    }

    return jsonify(to_send)


@app.route('/read_customer')
def read_customer():
    customer_id = request.args.get('CustomerId', type=int)
    sql_statement = ""

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    row = cursor.fetchone()
    message = "success"
    payload = {
        "customer_name": row["customer_name"],
        "customer_phone": row["customer_phone"],
        "customer_address": row["customer_address"],
        "balance": row["balance"]
    }

    to_send = {
        "status_code": 200,
        "message": message,
        "payload": payload
    }

    return jsonify(to_send)


@app.route('/read_loans')
def read_loans():
    customer_id = request.args.get('CustomerId', type=int)
    sql_statement = ""

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    rows = cursor.fetchall()
    loans = []
    for row in rows:
        loan = {
            "CustomerLoanId": row["CustomerLoanId"],
            "loan_amount": row["loan_amount"]
        }
        loans.append(loan)

    to_send = {
        "status_code": 200,
        "message": "success",
        "payload": loans
    }

    return jsonify(to_send)


@app.route('/read_payments')
def read_payments():
    customer_id = request.args.get('CustomerId', type=int)
    loan_id = request.args.get('LoanId', type=int)

    sql_statement = ""

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    rows = cursor.fetchall()
    payments = []

    for row in rows:
        payment = {
            "PaymentId": row["PaymentId"],
            "payment_date": row["payment_date"],
            "payment_amount": row["payment_amount"]
        }
        payments.append(payment)

    to_send = {
        "status_code": 200,
        "message": "success",
        "payload": payments
    }

    return jsonify(to_send)


@app.route('/read_loan_amount')
def read_loan_amount():
    customer_id = request.args.get('CustomerId', type=int)
    loan_id = request.args.get('LoanId', type=int)

    sql_statement = ""

    try:
        cursor.execute(sql_statement)
    except Exception as error:
        to_send = {
            "status_code": 400,
            "message": error,
        }
        return jsonify(to_send)

    loan_amount = cursor.fetchone()[0]

    to_send = {
        "status_code": 200,
        "message": "success",
        "loan_amount": loan_amount
    }

    return jsonify(to_send)


def test_db():
    sql_statement = "SELECT loan_amount FROM loan where loan.loanId=1"
    cursor.execute(sql_statement)
    results = cursor.fetchall()
    print(results)


# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application
    # on the local development server.

    app.run()
    # test_db()

