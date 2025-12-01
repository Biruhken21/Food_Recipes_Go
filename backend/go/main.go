package main

import (
	"auth/routes"
	"log"
	"net/http"
	"os"
)

func main() {
	// Get the port from the environment variable
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000" // Default if PORT is not set
	}

	r := routes.SetupRoutes()

	log.Printf("Server running on :%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
