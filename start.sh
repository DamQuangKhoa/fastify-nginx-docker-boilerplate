kill $(lsof -ti:3050)
docker-compose down && docker-compose up --build 