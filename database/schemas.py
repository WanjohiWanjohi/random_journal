from typing import List, Union

from pydantic import BaseModel


class JournalBase(BaseModel):
    content: str


class JournalCreate(JournalBase):
    pass


class Journal(JournalBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    journals: List[Journal] = []

    class Config:
        orm_mode = True
