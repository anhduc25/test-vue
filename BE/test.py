fake_users_db = {
    "john": {
        "username": "john",
        "full_name": "John Doe",
        "email": "john@example.com",
        "hashed_password": "$2b$12$9QvD8WZH7Vq3NlIe7VrL/O8f1/6C5.VIuECDGcFOm8WJjrzHbgMy6"
    }
}
print(fake_users_db["john"]['username'])
