# Containerizing a Spring Boot Application with Docker

## Project structure

```
project-root/
│
├── src/
├── target/
├── pom.xml
├── mvnw
├── mvnw.cmd
├── HELP.md
└── readme.md
```

1. src/main : Contains the Java source code for the Spring Boot application.
2. src/test : Contains the unit tests for the application.
3. target : This directory is generated after building the project and contains the compiled classes and the packaged JAR file.
4. pom.xml : The Maven configuration file that defines the project dependencies and build configuration.
5. mvnw and mvnw.cmd : These are the Maven Wrapper scripts that allow you to run Maven commands without having Maven installed on your system. They will download the correct version of Maven if it's not already present.

---

## Dockerize the application

### using Single Stage Dockerfile

```Dockerfile
FROM eclipse-temurin:21-jre

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

### using Multi Stage Dockerfile

```Dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/target/\*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```
