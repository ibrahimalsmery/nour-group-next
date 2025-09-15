# Dockerfile
FROM alpine:3.22

# Set working dir
WORKDIR /pb

# Download latest PocketBase release
ADD https://github.com/pocketbase/pocketbase/releases/download/v0.22.14/pocketbase_0.22.14_linux_amd64.zip pb.zip

# Unzip and remove archive
RUN apk add --no-cache unzip \
    && unzip pb.zip -d . \
    && rm pb.zip

# Expose default port
EXPOSE 8090

# Run PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
