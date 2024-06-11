# telechargement de maven
FROM maven:3.9.7-eclipse-temurin-17 AS build

# création du dossier app && cd
WORKDIR /app

 # je copie le projet
COPY . .

# telechargement des dependances & compilation
RUN mvn clean package -DskipTests # npm install && npm run build --prod

# utilisation d'un JRE pour executer le code
FROM eclipse-temurin:17-jre-jammy

# création du dossier app & cd
WORKDIR /app

# je copie mon application java compilé dans l'image du JRE
COPY --from=build /app/target/*.war app.war


# j'expose le port 8080 (utilisé par l'API)
EXPOSE 8080

# commande qui sera executé lors du lancement du container
ENTRYPOINT ["java -jar app.war"]

