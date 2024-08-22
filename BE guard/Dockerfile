FROM openjdk:22-jdk-slim
WORKDIR /app

CMD ["./gradlew", "clean", "bootJar"]

COPY build/libs/guard-0.0.1-SNAPSHOT.jar /app/guard-0.0.1-SNAPSHOT.jar

#EXPOSE 8080
ENTRYPOINT ["java", "-jar", "guard-0.0.1-SNAPSHOT.jar"]