
FROM node:10-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
ENV APP_SETTINGS_FILE_PATH 'app/config/appSettings.json'
CMD ["node", "app.js"]
