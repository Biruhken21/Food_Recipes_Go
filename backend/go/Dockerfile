FROM golang:1.24.0

WORKDIR /app

COPY go.mod go.sum ./
COPY vendor/ ./vendor/
COPY . .

ENV GOFLAGS=-mod=vendor

RUN go build -o main .

CMD ["./main"]
