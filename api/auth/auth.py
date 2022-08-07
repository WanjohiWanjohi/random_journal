from fastapi.security import OAuth2PasswordBearer
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
# from api.main import User
# TODO: replace the token with an actual token

    
def fake_decode_token(token):
    pass
    # return User(
    #     username=token + "fakedecoded", email="john@example.com", full_name="John Doe"
    # )