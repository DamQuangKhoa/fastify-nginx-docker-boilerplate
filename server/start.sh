kill $(lsof -ti:5000)
docker build -t server .
docker run server