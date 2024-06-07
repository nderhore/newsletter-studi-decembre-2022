# telechargement de l'image Node dans le but d'installer les dependances du projet
FROM node:18.10.0-alpine AS build

# mkdir /app && cd
WORKDIR /app

# copy du package.json dans le /app
COPY package.json .

# installation de yarn et dependance
#RUN npm i yarn@1.22.22
RUN yarn install

# Copier le reste du code
COPY . .

# Construction de l'application
RUN npm run build --prod

# etape 2 : mettre à disposition un serveur web
FROM nginx:alpine3.19

# importation de notre configuration ngix à la place de celle par defaut
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# etape 3 : copier le resultat du "build" dans mon server
COPY --from=build /app/dist/front-newsletter /usr/share/nginx/html
# j'ecoute sur le port 80
EXPOSE 80

# demarrer le serveur nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]




