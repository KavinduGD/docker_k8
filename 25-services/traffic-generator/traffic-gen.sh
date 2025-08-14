#/bin/bash


if [ "$#" -lt 2 ]
then
echo "Usage: $0 <target> <interval-in-seconds>"
exit 1
fi

TARGET=$1
INTERVAL=$2

echo "Sending request to $TARGET every $INTERVAL seconds"

while true
do
REQUEST_TIME=$(date +"%Y-%M-%D %H:%m:%S")
RESPONSE=$(curl -s "$TARGET")
echo "[{$REQUEST_TIME}] {$RESPONSE}"
sleep $INTERVAL
done