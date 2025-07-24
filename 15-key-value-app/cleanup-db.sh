source .env.db
source .env.volume
source .env.network


if [ "docker ps -q -f name=$DB_CONTAINER_NAME" ]; then
    echo "Container name with $DB_CONTAINER_NAME is removing"
    docker kill $DB_CONTAINER_NAME
else
    echo "Container name with $DB_CONTAINER_NAME does not exits"
fi


if [ "docker network ls -q -f name=$NETWORK_NAME" ]; then
    echo "Network name with $NETWORK_NAME is removing"
    docker network rm $NETWORK_NAME
else
    echo "Network name with $NETWORK_NAME does not exits"
fi


if [ "docker volume ls -q -f name=$VOLUME_NAME" ]; then
    echo "Volume name with $VOLUME_NAME is removing"
    docker volume rm $VOLUME_NAME
else
    echo "Volume name with $VOLUME_NAME does not exits"
fi
