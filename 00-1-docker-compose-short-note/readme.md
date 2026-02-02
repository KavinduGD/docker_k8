## Docker compose

- Docker compose is a tool to define and run multi-container docker applications.

### bind mount vs watch

- **In docker compose watch is better than bind mount**
- **watcher** Compose watches the host folder and syncs changes to the container.
- **Bind mount** - Directly links a folder from your host machine into the container.

  ```bash
  docker-compose up --watch
  ```

- **docker compose up with rebuild images**

  ```bash
  docker-compose up --build
  ```

- **Environment variables get resolved if .env exists**

  ```yaml
  environment:
    - PORT=${PORT}
    - MONGODB_HOST=${MONGODB_HOST}
  ```

- **Compose file override**

  > use compose.override.yaml

- **Compose file join**

  ```bash
  # use include
  include:
    - notebooks-backend/compose.yaml
    - notes-backend/compose.yaml
  ```
