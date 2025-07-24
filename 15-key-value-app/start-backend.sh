source .env.db

#  network connection
source .env.network
LOCALHOST_PORT=3000
CONTAINER_PORT=3000

BACKEND_IMAGE_NAME=key-value-backend
BACKEND_CONTAINER_NAME=backend

MONGO_HOST=mongodb


if [ "$(docker ps -q -f name=$BACKEND_CONTAINER_NAME)" ]; then
    echo "A container with the name $BACKEND_CONTAINER_NAME already exits"
    echo "The container will be removed when stopped"
    echo "to stop the container, run: docker kill $BACKEND_CONTAINER_NAME"
    exit 1
fi

docker build -t $BACKEND_IMAGE_NAME \
-f backend/Dockerfile.product \
backend

docker run -d --rm  \
-e KEY_VALUE_DB=$KEY_VALUE_DB  \
-e KEY_VALUE_USER=$KEY_VALUE_USER  \
-e KEY_VALE_PASSWORD=$KEY_VALE_PASSWORD \
-e MONGODB_HOST=$MONGO_HOST \
-e LOCALHOST_PORT=$LOCALHOST_PORT \
-p $LOCALHOST_PORT:$CONTAINER_PORT   \
--network $NETWORK_NAME \
-v ./backend/src:/app/src \
--name $BACKEND_CONTAINER_NAME  \
$BACKEND_IMAGE_NAME


