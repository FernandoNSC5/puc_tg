FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/puctg-0.0.1-SNAPSHOT.jar .
EXPOSE 8081
ENTRYPOINT ["java","-jar","puctg-0.0.1-SNAPSHOT.jar"]