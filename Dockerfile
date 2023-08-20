# Use the official OpenJDK 17 image as the base image
FROM eclipse-temurin:17-jre-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the generated JAR file from the Maven target directory into the container
COPY target/D387_sample_code-0.0.2-SNAPSHOT.jar app.jar

# Expose port 8080 to the host machine
EXPOSE 8080

# Command to run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
