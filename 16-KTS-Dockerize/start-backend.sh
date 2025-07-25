# if [ "$(docker images -q -f name=kts-admin)" ];

docker build -t kts-backend -f ./backend/Dockerfile ./backend

docker run -d --rm \
 --name backend \
 -p 4000:4000 \
 --env-file ./backend/.env \
 kts-backend
