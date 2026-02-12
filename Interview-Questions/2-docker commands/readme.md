# Docker Image Commands Questions

## What is the diffrence between RUN, CMD, and ENTRYPOINT?

- RUN is executed during the build time
- CMD and ENTRYPOINT are executed during the runtime
- CMD is the default command to run when the container starts
- ENTRYPOINT is the command that will be run when the container starts

## What is difference between COPY and ADD?

- (copied from build context)
- COPY is used to copy files from the host to the container 
- ADD is used to copy files from the host to the container and it can also download files from urls
- ADD also can extract files from tar archives

# Docker Container Commands Questions

## What is the difference between docker create, start, and run?

- docker create is used to create a container
- docker start is used to start a container
- docker run is used to create and start a container

## What commands use for debugging running containers?

- docker exec

## What commands use for inspecting containers?

- docker inspect

## What commands use for see logs of containers?

- docker logs

## What is docker run -d -p 8080:80?

- -d: run in detached mode
- -p: port mapping
- 8080:80: maps port 8080 on the host to port 80 on the container


