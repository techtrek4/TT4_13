from flask import Flask
from flask import request
import mysql.connector
from flask import jsonify
from copy import copy

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'


@app.route('/read_customer')
def read_customer():
    message = "success"
    payload = {
        "customer_name": "hey",
        "customer_phone": 6565556,
        "customer_address": "fjlafjljafa",
        "balance": 562323
    }

    to_send = {
        "message": message,
        "payload": payload
    }

    return jsonify(to_send)


@app.route('/read_balance')
def read_balance():
    message = "success"
    payload = {
        "balance": 562323
    }

    to_send = {
        "message": message,
        "payload": payload
    }

    return jsonify(to_send)


@app.route('/create_loan')
def create_loan():
    to_send = {
        "message": "hey",
    }

    return jsonify(to_send)


@app.route('/read_loan_amount')
def read_loan_amount():
    to_send = {
        "message": "hey",
        "payload": 45454
    }

    return jsonify(to_send)


@app.route('/read_loans')
def read_loans():
    pay = {
        "CustomerLoanId": 35464,
        "loan_amount": 56565
    }
    to_send = {
        "message": "hey",
        "payload": [copy(pay)] * 3
    }

    return jsonify(to_send)


@app.route('/create_payment')
def create_payment():
    to_send = {
        "message": "hey",
    }

    return jsonify(to_send)


@app.route('/read_payments')
def read_payments():
    payment = {
        "PaymentId": 35464,
        "payment_date": 56565,
        "payment_amount": 565656
    }

    to_send = {
        "message": "hey",
        "payload": [copy(payment)] * 3
    }

    return jsonify(to_send)


# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
    # read_loan_amount()

