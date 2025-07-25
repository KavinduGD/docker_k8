source .env

docker build -t kts-user \
--build-arg VITE_GOOGLE_API_KEY=$VITE_GOOGLE_API_KEY \
-f ./user/Dockerfile \
./user

docker run -d --rm \
 --name user \
 -p 3001:80 \
 kts-user
