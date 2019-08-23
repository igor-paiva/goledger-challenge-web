# GoLedger Challenge

This is a simple web page made to manage the pilots of air companies.

## Prerequisites

In this project was used Docker. To install and know more about see the [docs](https://docs.docker.com/).

## Installing

Clone the repository:

```
git clone git@github.com:igor-paiva/goledger-challenge-web.git
```

With the cloned project and Docker installed. Go the the project root and create the container:

```
docker-compose up -d
```

The **-d** flag is to run it on detached mode.

When it finishes the server will run on the localhost, on the **8080** port. To access use the following URL:

[http://localhost:8080](http://localhost:8080)

## Using

To use you will need to login with your account.

Type the company name to filter the results.

## Utilizado
* [Quasar](https://quasar.dev) - Framework JavaScript
* [Docker](https://docs.docker.com/) - Container manager

## Author
* Igor Batista Paiva - [https://github.com/igor-paiva](https://github.com/igor-paiva)
