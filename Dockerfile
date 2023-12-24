FROM node:18.17.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY frontend/ ./frontend
COPY backend/ ./backend

EXPOSE 3000 5000

CMD ["npm", "start"]
