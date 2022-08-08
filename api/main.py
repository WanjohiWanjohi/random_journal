from datetime import datetime
from hashlib import new
import uvicorn
from typing import Union
from auth.auth import get_current_user
from base_models import User, Journal
from database import functions, models, schemas
from database.database import SessionLocal, engine
from auth.auth import oauth2_scheme
from sqlalchemy.orm import Session
models.Base.metadata.create_all(bind=engine)
from fastapi import FastAPI, Depends, Form, HTTPException
from pydantic import BaseModel, ValidationError, validator
from fastapi.middleware.cors import CORSMiddleware
import schedule
import time

## cors 
origins = ["*"]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
        
async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
       


@app.post("/register", response_model=schemas.User)
async def register(user: schemas.UserCreate, db: Session = Depends(get_db)):
    """_summary_
    Register a new user
    Returns:
        _type_: _description_
    """
    db_user = functions.get_user_by_email(db, email=user.email)
    if db_user:
            raise HTTPException(status_code=400, detail="Email already registered")
    return functions.create_user(db=db, user=user)

@app.post("/login")
async def login(user:User ):
    current_user =  user
    login_token = functions.create_login_token(current_user)
    return login_token

@app.post("/journal")
# token=Depends(oauth2_scheme)
async def write( content:str, db: Session = Depends(get_db) ):
    """_summary_
    Make a journal entry less than 500 characters long

    Args:
        entry (Journal): Journal entry whose content is less than 500 characters long
    """
    journal_text = Journal(
        content=content,
        entry_time=datetime.now(),
        owner=User(email="wamuyuwanjohi97@gmail.com" ,password="sedfghjkl")
    )
    functions.create_user_journal(journal=journal_text, db=db)
    return journal_text

@app.get("/read")
# TODO: Replace user email

async def read(token, db: Session = Depends(get_db), user_email="wamuyuwanjohi97@gmail.com"):
    """_summary_ Returns list of journal entries for a user
    """
    functions.read_journals(token , db=db, user_email=user_email)
    pass
schedule.every().day.at("12:00").do(read)

@app.get("/journal/{id}")
async def read_own_journal(user:User):
    """_summary_ Returns list of journal entries for a user
    """
    
    pass


@app.get("/read/{id}")
async def read_entry(journal_id):
    """_summary_ Returns an entry for a journal for a given user""" 
    pass

while True:
     
    # Checks whether a scheduled task
    # is pending to run or not
    schedule.run_pending()
    time.sleep(200)

