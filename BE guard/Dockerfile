FROM gradle:jdk-22 as build
WORKDIR /app

CMD ["./gradlew", "clean", "bootJar"]

COPY build/libs/guard-0.0.1-SNAPSHOT.jar /app/guard-0.0.1-SNAPSHOT.jar

#EXPOSE 8080
ENTRYPOINT ["java", "-jar", "guard-0.0.1-SNAPSHOT.jar"]