from datetime import datetime
from hashlib import new
import uvicorn
from typing import Union
from database import functions, models, schemas
from database.database import SessionLocal, engine
from auth.auth import oauth2_scheme
from sqlalchemy.orm import Session
models.Base.metadata.create_all(bind=engine)
from fastapi import FastAPI, Depends, Form, HTTPException
from pydantic import BaseModel, ValidationError, validator
#db Dependency
# Dependency
def get_db():
    """_summary_
        spawns a database session and closes it when released
    Yields:
        postgresql db session
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

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
       
app = FastAPI()

@app.post("/register", response_model=schemas.User)
async def register(user: schemas.UserCreate, db: Session = Depends(get_db), token=Depends(oauth2_scheme)):
    """_summary_
    Register a new user
    Returns:
        _type_: _description_
    """
    db_user = functions.get_user_by_email(db, email=user.email)
    if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
    return functions.create_user(db=db, user=user)

@app.post("/login/")
async def login(email: str = Form(), password: str = Form()):
    current_user =  User(email, password)
    return current_user

@app.post("/journal")
async def journal(entry:Journal):
    """_summary_
    Make a journal entry less than 500 characters long

    Args:
        entry (Journal): Journal entry whose content is less than 500 characters long
    """
    return entry.content

 # at last, the bottom of the file/module
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5049)
