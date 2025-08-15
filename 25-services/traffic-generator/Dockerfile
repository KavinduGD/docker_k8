FROM alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY traffic-gen.sh .

ENTRYPOINT [ "./traffic-gen.sh" ]