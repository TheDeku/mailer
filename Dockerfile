FROM node

WORKDIR /app 

COPY package.json package.lock*.json ./

RUN npm install --quiet && npm cache clean --force

COPY . .




#mar.astorgag@alumnos.duoc.cl