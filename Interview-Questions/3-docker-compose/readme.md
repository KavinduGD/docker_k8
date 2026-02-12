# Docker Compose Questions

```yaml
services:
  webapp:
    build: ./webapp
    ports:
      - "8000:5000"
    environment:
      DATABASE_URL: "postgresql://user:password@db:5432/myappdb"
    volumes:
      - ./webapp:/usr/src/app
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: myappdb
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

## What is docker compose?

- Docker compose is a tool for defining and running multi-container Docker applications.

## Why do we need docker compose?

- When we have multiple containers, we need to define the relationships between them.
- We need to define the ports, volumes, and networks for each container.
- We need to define the environment variables for each container.
- We need to define the dependencies between the containers.

## What is a service in docker compose?

A service defines:

- The container image
- Ports
- Volumes
- Environment variables
  Each service becomes a container when running.

## How does network work in docker compose?

- Docker compose creates a default bridge network for each application.
- All services in the application are connected to this network.
- Services can communicate with each other using the service name as the hostname.

## What is `depends_on` in docker compose?

- `depends_on` is used to define the dependencies between services.
- It ensures that the dependent service is started before the service that depends on it.

## What is `volumes` in docker compose?

- `volumes` is used to define the volumes for the services.
- It is used to persist the data in the containers.

## Way to pass environment variables to docker compose?

- `environment` is used to define the environment variables for the services.
- We can also use `.env` file to define the environment variables. It automatically loads the environment variables from the `.env` file.

## Two way images can be create in compose?

- Using `build` keyword
- Using `image` keyword

## What is custom network in docker compose?

- Custom network is a network that is created by the user.
- It is used to connect the containers in the application.

## `docker-compos` vs `docker compose`?

- `docker-compose` old standalone tool
- `docker compose` is the new integrated tool to docker CLI

## How to overwrite config in docker compose?

- using `docker-compose.override.yml` file

## Can docker compose used in production?

- Yes, but not recommended for large scale applications.
- It is recommended to use Kubernetes for large scale applications.

## What is service name resolution in docker compose?

- Docker compose provides service name resolution using the service name as the hostname.
- Services can communicate with each other using the service name as the hostname.

