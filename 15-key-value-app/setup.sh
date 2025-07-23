# responsible for creating volumes adn networks

source .env.network
source .env.volume


if [ "$(docker volume ls -q -f name=$VOLUME_NAME)" ];then
    echo "A volume with name $VOLUME_NAME already exits.Skipping volume creating"
else   
    echo "$VOLUME_NAME volume is creating"
    docker volume create $VOLUME_NAME
fi


if [ "$(docker network ls -q -f name=$NETWORK_NAME)" ];then
    echo "A network with name $NETWORK_NAME already exits.Skipping network creating"
else   
    echo "$NETWORK_NAME network is creating"
    docker network create $NETWORK_NAME
fi
