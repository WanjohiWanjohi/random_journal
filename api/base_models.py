from pydantic import BaseModel,validator
from datetime import datetime
from typing import Union


class User(BaseModel):
    email: str
    password: str
    # journals:Union[list(Journal), None] = None    
    
    
class Journal(BaseModel):
    entry_time: datetime
    content: Union[str, None] = None
    owner:User

    
    @validator('content')
    def entry_less_than_500(cls, v:str):
        if len(v) > 500:
            raise ValueError('Journal content have less than 500 characters')
        return v
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Union[str, None] = None


class UserInDB(User):
    hashed_password: str