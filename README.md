# Listings-db

## Steps to run in Development Environment

```
# From root folder
npm run dev
```

or do the following 2 steps

### Start API server

(Start this first, or else you will get error when web app attempt to call API)

```
cd server
npm install
npm run start
```

    API is availble on port 3001

### Start NextJS App

```
cd app
npm install
npm run dev
```

    Web App is available on port 3000

        http://localhost:3000

## Steps to deploy

```
# From root folder where you have now.json
now
```
