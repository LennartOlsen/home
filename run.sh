SERVICE_NAME=lennartolsennet
SERVICE_TAG=web_app
HOST_PORT=80
CONTAINER_PORT=80

echo "======== Remove old services '$SERVICE_NAME' ========="
docker rm -f $SERVICE_NAME

echo "======== Building docker image '$SERVICE_NAME' ========="
docker build -t $SERVICE_NAME .

echo "====== Running docker container '$SERVICE_NAME' ========"
docker run -d --publish $HOST_PORT:$CONTAINER_PORT --name $SERVICE_NAME $SERVICE_NAME