from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from sqlalchemy import select
from . import models, schemas
import uuid


def get_user_by_email(db: Session, email: str):
    """_summary_

    Args:
        db (Session): _description_
        email (str): _description_

    Returns:
        a user if one is found by email else raises 
    """
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    # TODO: Use proper hashes here 
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(id = uuid.uuid4(), email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_user_journal(db: Session, journal: schemas.JournalCreate, user_id: int):
    db_item = models.Journal(**journal.dict(), owner_id=user_id)
    db.add(db_item)
    # TODO : Possibility of race: optimize
    db.commit()
    db.refresh(db_item)
    return db_item
def send_journal(journals, user_list):
    """_summary_

    Args:
        journals (_type_): _description_
        user_list (_type_): _description_
    """
    pass

def read_journals(token , user_email, db: Session):
    """
    Returns all journals not read in the past 24 hours 
    """
    if not token: raise ValueError("Make sure you have the correct privliges required")
    now = datetime.now()
    twenty_four_hours_ago = now - timedelta(hours=24)
    current_user_id = db.query(models.User.id).filter(models.User.email == user_email).first()
    #Get all the journals written within past 24 hours
    past_twenty_four_hours_journals = select(models.Journal).where(models.Journal.inserted_at >= twenty_four_hours_ago)
    result = db.execute(past_twenty_four_hours_journals)
    print(result)
    # if current user has not written journal in past 24 hours, return empty list to read
    return db.query(models.Journal.content).filter(models.Journal.owner_id != current_user_id ).all()        
    # return all other journals avaibale for reading
def create_login_token(user_form):
 
    pass