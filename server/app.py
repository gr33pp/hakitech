from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from os import environ, path
from dotenv import load_dotenv
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_jwt_extended import get_jwt_identity
from datetime import datetime
from datetime import timedelta
from datetime import timezone
import random
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = environ.get("SQLALCHEMY_DATABASE_URI")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = environ.get("SECRET_KEY")
app.config['JWT_SECRET_KEY'] = environ.get("JWT_SECRET_KEY")
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1) 

db = SQLAlchemy(app)
jwt = JWTManager(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    meter_number = db.Column(db.String(50), unique=True, nullable=False)
    balanced = db.Column(db.String(50), nullable=False)
    usage = db.Column(db.String(50), nullable=False)
    active = db.Column(db.Integer, nullable=False)

class TokenBlocklist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)

with app.app_context():
    db.create_all()

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.form
    name = data['name']
    email = data['email']
    password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    meter_number = data['meter_number']
    balance = str(random.randint(1000, 5000))
    usage = str(random.randint(10, 80))
    active = random.choice([0,1])
    # Check if email already exists
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "User already exists"}), 409  # HTTP 409 Conflict
    # Check if meter number already exists
    user = User.query.filter_by(meter_number=meter_number).first()
    if user:
        return jsonify({"msg": "Meter cannot be registered twice"}), 409

    new_user = User(name=name, email=email, password=password, meter_number=meter_number, balanced=balance, usage=usage, active=active)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"msg": "User created successfully"}), 201  # HTTP 201 Created

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.form
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"msg": "Login successful", "access_token": f"Bearer {access_token}"}), 200

    return jsonify({"msg": "Invalid credentials"}), 401

@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
    jti = jwt_payload["jti"]
    token = db.session.query(TokenBlocklist.id).filter_by(jti=jti).scalar()

    return token is not None


@app.route("/api/auth/logout", methods=["DELETE"])
@jwt_required()
def modify_token():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    db.session.add(TokenBlocklist(jti=jti, created_at=now))
    db.session.commit()
    return jsonify(msg="Logout successful")

@app.route('/api/dashboard/me', methods=['GET'])
@jwt_required()
def dashboard():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    return jsonify({"msg": "Dashboard",
                   "user": user.name,
                   "email": user.email,
                   "meter_number": user.meter_number,
                   "balance": user.balanced,
                   "usage": user.usage,
                   "active": bool(user.active)}), 200

if __name__ == '__main__':
    app.run(port=5055, debug=False)
