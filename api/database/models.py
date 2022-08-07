from uuid import UUID
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    journals = relationship("Journal", back_populates="owner")


class Journal(Base):
    __tablename__ = "journals"
  
    id = Column(UUID (as_uuid=True), primary_key=True, index=True)
    content = Column(String, index=True)
    owner_id = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    owner = relationship("User", back_populates="journals")
