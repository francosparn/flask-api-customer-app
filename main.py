from flask import Flask, render_template, jsonify, request
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# CORS
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# MySQL connection
app.config['MYSQL_HOST'] = ''
app.config['MYSQL_USER'] = ''
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = ''

mysql = MySQL(app)

# Get Customer
@app.route('/api/customers/<int:id>', methods=['GET'])
@cross_origin()
def get_customer(id):
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, firstname, lastname, email, phone, passport, address, gender, state FROM customers WHERE id = " + str(id))
    data = cursor.fetchall()
    content = {}
    
    for row in data:
        content = {
            'id': row[0], 
            'firstname': row[1], 
            'lastname': row[2], 
            'email': row[3], 
            'phone': row[4],
            'passport': row[5],
            'address': row[6],
            'gender': row[7],
            'state': row[8]
        }
        
    return jsonify(content)

# Get All Customers
@app.route('/api/customers', methods=['GET'])
@cross_origin()
def get_all_customers():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, firstname, lastname, email, phone, passport, address, gender, state FROM customers")
    data = cursor.fetchall()
    result = []
    
    for row in data:
        content = {
            'id': row[0],
            'firstname': row[1],
            'lastname': row[2],
            'email': row[3],
            'phone': row[4],
            'passport': row[5],
            'address': row[6],
            'gender': row[7],
            'state': row[8]
        }
        result.append(content)
        
    return jsonify(result)

# Action method (create or update)
@app.route('/api/customers', methods=['POST'])
@cross_origin()
def action():
    if 'id' in request.json:
        update_customer()
    else:
        save_customer()
    
    return 'Process carried out satisfactorily'

# Save Customer
def save_customer():
    firstname = request.json['firstname']
    lastname = request.json['lastname']
    email = request.json['email']
    phone = request.json['phone']
    passport = request.json['passport']
    address = request.json['address']
    gender = request.json['gender']
    state = request.json['state']
    
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("INSERT INTO customers (id, firstname, lastname, email, phone, passport, address, gender, state) VALUES(NULL, %s, %s, %s, %s, %s, %s, %s, %s);",
                       (firstname, lastname, email, phone, passport, address, gender, state))
        mysql.connection.commit()
        return 'The customer has been successfully created'
    except Exception:
        return 'Oops.. it seems there was an error'

# Update Customer
def update_customer():
    firstname = request.json['firstname']
    lastname = request.json['lastname']
    email = request.json['email']
    phone = request.json['phone']
    passport = request.json['passport']
    address = request.json['address']
    gender = request.json['gender']
    state = request.json['state']
    id = request.json['id']
    
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("UPDATE customers SET firstname = %s, lastname = %s, email = %s, phone = %s, passport = %s, address = %s, gender = %s, state = %s WHERE customers.id = %s;",
                        (firstname, lastname, email, phone, passport, address, gender, state, id))
        mysql.connection.commit()
        return 'The customer has been successfully updated'
    except Exception:
        return 'Oops.. it seems there was an error'
    
# Delete Customer
@app.route('/api/customers/<int:id>', methods=['DELETE'])
@cross_origin()
def delete_customer(id):
    try:
        cursor = mysql.connection.cursor()
        cursor.execute("DELETE FROM customers WHERE customers.id = " + str(id) + ";")
        mysql.connection.commit()
        return 'The customer has been successfully delete'
    except Exception:
        return 'Oops.. it seems there was an error'

# Get Last Customer
@app.route('/api/customers/last-customer', methods=['GET'])
@cross_origin()
def get_last_customer():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM customers ORDER by id DESC LIMIT 1")
    data = cursor.fetchall()
    content = {}
    
    for row in data:
        content = {
            'id': row[0],
            'firstname': row[1],
            'lastname': row[2],
            'email': row[3],
            'phone': row[4],
            'passport': row[5],
            'address': row[6],
            'gender': row[7],
            'state': row[8]
        }
        
    return jsonify(content)

# Get Total Customers
@app.route('/api/customers/total', methods=['GET'])
@cross_origin()
def get_total_customers():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM customers")
    data = cursor.fetchall()
    content = {}
    
    for row in data:
        content = {
            'total': row[0]
        }
        
    return jsonify(content)

# Get active customers
@app.route('/api/customers/active', methods=['GET'])
@cross_origin()
def get_active_customers():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM customers WHERE state = 'Active'")
    data = cursor.fetchall()
    content = {}
    
    for row in data:
        content = {
            'total': row[0]
        }
        
    return jsonify(content)

# Get inactive customers
@app.route('/api/customers/inactive', methods=['GET'])
@cross_origin()
def get_inactive_customers():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM customers WHERE state = 'Inactive'")
    data = cursor.fetchall()
    content = {}
    
    for row in data:
        content = {
            'total': row[0]
        }
        
    return jsonify(content)

# Index
@app.route('/')
@cross_origin()
def index():
    return render_template('index.html')

@app.route('/<path:path>')
@cross_origin()
def public_files(path):
    return render_template(path)

if __name__ == '__main__':
    app.run(None, 3000, True)
