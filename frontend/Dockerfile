FROM node:12.22.9-alpine3.15
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install # -g npm@8.5.1
COPY . .
EXPOSE 3000
CMD ["npm", "start"]