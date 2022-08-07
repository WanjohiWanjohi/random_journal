from sqlalchemy.orm import Session
from . import models, schemas
def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.UserCreate):
    # TODO: Use proper hashes here 
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
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