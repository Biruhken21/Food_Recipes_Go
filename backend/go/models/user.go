package models

import (
	"auth/config"
)

type User struct {
	ID           uint   `json:"id"`
	Username     string `json:"username"`
	Email        string `json:"email"`
	PasswordHash string `json:"password_hash"`
}

func CreateUser(user User) error {
	db := config.GetDB()
	_, err := db.Exec("INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)", user.Username, user.Email, user.PasswordHash)
	return err
}

func GetUserByEmail(email string) (User, error) {
	db := config.GetDB()
	var user User
	err := db.QueryRow("SELECT id, username, email, password FROM users WHERE email=$1", email).
		Scan(&user.ID, &user.Username, &user.Email, &user.PasswordHash)
	return user, err
}
