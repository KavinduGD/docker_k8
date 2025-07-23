# image details
MONGO_IMAGE="mongodb/mongodb-community-server"
MONGO_IMAGE_TAG="7.0-ubuntu2204"

# container name 
# user credentials 
source .env.db

# root credentials 
ROOT_USER="root"
ROOT_PASSWORD="WinstonK123"



#  network connection
source .env.network
LOCALHOST_PORT=27017
CONTAINER_PORT=27017

# storage
source .env.volume
VOLUME_CONTAINER_PATH="/data/db"

source setup.sh


if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
    echo "A container with the name $DB_CONTAINER_NAME already exits"
    echo "The container will be removed when stopped"
    echo "to stop the container, run: docker kill $DB_CONTAINER_NAME"
    exit 1
fi



docker run -d --rm  \
-e MONGO_INITDB_ROOT_USERNAME=$ROOT_USER \
-e MONGO_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
-e KEY_VALUE_DB=$KEY_VALUE_DB  \
-e KEY_VALUE_USER=$KEY_VALUE_USER   \
-e KEY_VALE_PASSWORD=$KEY_VALE_PASSWORD   \
-v ./db-config/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro   \
-v $VOLUME_NAME:$VOLUME_CONTAINER_PATH   \
-p $LOCALHOST_PORT:$CONTAINER_PORT \
--network $NETWORK_NAME \
--name $DB_CONTAINER_NAME  \
$MONGO_IMAGE:$MONGO_IMAGE_TAG;

