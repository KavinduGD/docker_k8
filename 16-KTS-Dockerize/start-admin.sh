# if [ "$(docker images -q -f name=kts-admin)" ];
source .env

docker build -t kts-admin \
--build-arg VITE_GOOGLE_API_KEY=$VITE_GOOGLE_API_KEY \
-f ./admin/Dockerfile \
./admin

docker run -d --rm \
 --name admin \
 -p 3000:80 \
 kts-admin
