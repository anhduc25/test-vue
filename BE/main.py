import jwt

from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import datetime, timedelta
from typing import Optional, Union, Any
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


@app.get("/")  # giống flask, khai báo phương thức get và url
async def root():  # do dùng ASGI nên ở đây thêm async, nếu bên thứ 3 không hỗ trợ thì bỏ async đi
    return {"message": "Hello World"}

SECURITY_ALGORITHM = 'HS256'
SECRET_KEY = '123456'


fake_users_db = {
    "john": {
        "username": "john",
        "full_name": "John Doe",
        "email": "john@example.com",
        "hashed_password": "abc"
    }
}

origins = ["http://localhost:8080",]
app.add_middleware(CORSMiddleware,    allow_origins=origins,
                   allow_credentials=True,    allow_methods=["*"],    allow_headers=["*"],)


class LoginRequest(BaseModel):
    username: str
    password: str


def verify_password(username, password):
    if username == fake_users_db["john"]['username'] and password == fake_users_db["john"]['hashed_password']:
        return True
    return False


def generate_token(username: Union[str, Any]) -> str:
    expire = datetime.utcnow() + timedelta(
        seconds=60 * 60 * 24 * 3  # Expired after 3 days
    )
    to_encode = {
        "exp": expire, "username": username
    }
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY,
                             algorithm=SECURITY_ALGORITHM)
    return encoded_jwt


@app.post('/login')
def login(request_data: LoginRequest):
    print(f'[x] request_data: {request_data.__dict__}')
    if verify_password(username=request_data.username, password=request_data.password):
        token = generate_token(request_data.username)
        return {
            'token': token
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")
