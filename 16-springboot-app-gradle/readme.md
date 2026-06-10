# Containerizing a Gradle Spring Boot Application with Docker

## Project structure

```
project-root/
│
├── src/
├── build/
├── .gradle/
├── gradle/
├── build.gradle
├── settings.gradle
├── gradlew
├── gradlew.bat
```

1. src/main : Contains the Java source code and resources for the Spring Boot application.

2. src/test : Contains the unit tests and integration tests for the application.

3. build : This directory is generated after building the project and contains the compiled classes, test reports, and packaged JAR files.

4. build.gradle : The Gradle configuration file that defines the project dependencies, plugins, and build configuration.

5. settings.gradle : Defines the project name and configuration for multi-module projects.

6. gradlew and gradlew.bat : These are the Gradle Wrapper scripts that allow you to run Gradle commands without having Gradle installed on your system. They will download the correct version of Gradle if it's not already present.

7. gradle : Contains the Gradle Wrapper configuration files required by the Gradle Wrapper to download and use the correct Gradle version.

---

## Dockerize the application

### using Single Stage Dockerfile

```Dockerfile
FROM gradle:8.14-jdk21

WORKDIR /app

COPY . .

RUN gradle bootJar --no-daemon

RUN cp /app/build/libs/demo-0.0.1-SNAPSHOT.jar /app/demo.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "demo.jar"]
```

### using Multi Stage Dockerfile

```Dockerfile
FROM gradle:8.14-jdk21 AS build

WORKDIR /app

COPY . .

RUN gradle bootJar --no-daemon

FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

- 🛑 JDK is not required to run Jar file

### What are the differences between Single Stage and Multi Stage Dockerfiles?

1. **Build Process**: In a Single Stage Dockerfile, the application is built and run in the same stage, which means that all the build tools and dependencies are included in the final image. In contrast, a Multi Stage Dockerfile separates the build process into multiple stages, allowing you to use a lightweight base image for the final stage that only contains the necessary runtime dependencies.

2. **Image Size**: Single Stage Dockerfiles typically result in larger images because they include all the build tools and dependencies. Multi Stage Dockerfiles can significantly reduce the image size by only including the necessary runtime dependencies in the final image.

3. **Security**: Multi Stage Dockerfiles can enhance security by minimizing the attack surface of the final image. By excluding build tools and unnecessary dependencies, you reduce the potential vulnerabilities that could be exploited.

4. **Build Time**: Single Stage Dockerfiles may have faster build times since everything is done in one stage. However, Multi Stage Dockerfiles can take longer to build due to the additional stages and copying of artifacts between stages.
