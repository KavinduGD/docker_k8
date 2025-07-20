# image details
MONGO_IMAGE="mongodb/mongodb-community-server"
MONGO_IMAGE_TAG="7.0-ubuntu2204"
CONTAINER_NAME="mongodb"

# root credentials 
ROOT_USER="root"
ROOT_PASSWORD="WinstonK123"

# user credentials
KEY_VALUE_DB="key-value-db"
KEY_VALUE_USER="kavindu"
KEY_VALE_PASSWORD="WinstonK123*"

#  network connection
NETWORK_NAME="key-value-net"
LOCALHOST_PORT=27017
CONTAINER_PORT=27017

# storage
VOLUME_NAME="key-value-data"
VOLUME_CONTAINER_PATH="/data/db"


docker run -d --rm \
-e MONGO_INITDB_ROOT_USERNAME=$ROOT_USER \
-e MONGO_INITDB_ROOT_PASSWORD=$ROOT_PASSWORD \
-e KEY_VALUE_DB=$KEY_VALUE_DB  \
-e KEY_VALUE_USER=$KEY_VALUE_USER   \
-e KEY_VALE_PASSWORD=$KEY_VALE_PASSWORD   \
-v ./db-config/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro   \
-v $VOLUME_NAME:$VOLUME_CONTAINER_PATH   \
-p $LOCALHOST_PORT:$CONTAINER_PORT \
--network $NETWORK_NAME \
--name $CONTAINER_NAME $MONGO_IMAGE:$MONGO_IMAGE_TAG;

