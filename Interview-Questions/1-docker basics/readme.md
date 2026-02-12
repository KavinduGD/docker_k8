# Docker Basic Questions

## 1. What is Containerization?

- Containerization means putting an application and all its required files into a lightweight, portable package called a container, so it can run the same way on any machine.
- Before containers:
  - “It works on my machine” problem 😅
  - Different environments (dev, test, prod) caused issues
- With containers:
  - Same environment everywhere
  - Easy to deploy

## What is Docker?

- Docker is a platform that allows us to build, package, and run applications inside containers.
- One of containerization technologies

## What kind of problems does Docker solve?

- `It works on my machine` problem
- Different environments (dev, test, prod) caused issues
- no need for traditional VMs

## What is the difference between a container and a VM?

- containers
  - lighter (Contains only the application and its dependencies)
  - faster (No need to boot a full OS)
  - less isolated
  - use less resources (memory, disk space)
  - share the same kernel (OS)
- VMs
  - heavier (Contains a full OS)
  - slower
  - more isolated
  - use more resources (memory, disk space)
  - each has its own kernel

## Docker image vs Docker container?

- Docker image
  - A template for creating containers
  - Immutable (Read-only)
  - Contains the application and its dependencies
  - Built using a Dockerfile

- Docker container
  - A running instance of an image
  - Mutable (Writeable)
  - Isolated environment
  - Each container has its own filesystem

## What is a dockerfile?

- A dockerfile is a text file that contains instructions for building a docker image.

## What is a docker layer?

- Every instruction in a dockerfile creates a new layer.
- Each layer is cached and can be reused by other images.
- This allows for faster builds and smaller image sizes.

## What is a docker registry?

- A docker registry is a server that stores and distributes docker images.
- Docker Hub is the default registry.

## What is docker hub?

- Docker Hub is a public registry that hosts millions of images.
- It is the default registry for docker.

## What is docker build context?

- Docker build context is the set of files and directories that are available to the docker daemon when building an image.

## What is docker context?

- Docker context tells which docker environment to use.
- It is used to switch between different docker environments.

## What is docker daemon?

- Docker daemon is the background service that runs on your system and manages Docker containers.
- It is the main process that handles all the docker commands.
  -  build, run, push, pull, etc.

## What is a docker volume?

- containers are ephemeral (temporary)
- if a container is deleted, its data is also deleted
- volumes are persistent (permanent)
- volumes are stored outside the container
- volumes can be shared between containers
- volumes can be backed up and restored

## What bind mount?

- link a directory or file from the host to the container
- useful for development

## What is a docker network?

- containers are isolated by default
- docker network allows containers to communicate with each other
- to use dns resolution, containers need to be in the same bridge network (not the default bridge network)

## How to optimize docker images?

- Use multi-stage builds
- use distroless images
- Use .dockerignore file
- Use alpine linux (small base images)

## What is multi-stage build?

- Multi-stage build is a build process that uses multiple FROM instructions in a Dockerfile.
- The final image is created from the last stage.
- use to reduce the size of the final image
- Build on one image and run on another image

## How does dokcer isolate containers?

- Docker uses Linux namespaces and cgroups to isolate and control containers.

## What is docker swarm?

- Docker swarm is a tool for managing a cluster of docker nodes.
- simple than k8s

## Container lifecycle?

- created
- started
- paused
- stopped
- removed

## Docker container restart policies?

- no - container will not restart
- on-failure - container will restart if it fails
- unless-stopped - container will restart unless it is stopped manually
- always - container will always restart

## Docker best practices?

- Use .dockerignore file
- Use multi-stage builds
- Use alpine linux (small base images)
- Use distroless images
- run as non-root user
- Use health checks
- add resource limits
- scan for vulnerabilities

## How to improve docker security?
  - Use official and trusted images
  - Run containers as non-root user
  - Keep images small and updated
  - Limit CPU and memory usage
  - Avoid exposing unnecessary ports












