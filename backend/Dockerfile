FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COP
 
exit
cd ~/projects/mern-docker-starter

cat > .env << 'EOF'
PORT=5000
MONGO_URL=mongodb://admin:qwerty@mongo:27017/
