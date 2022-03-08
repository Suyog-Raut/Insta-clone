## Setting Up

### A. Clone and install packages

1. Fork this project from the top right of the screen to create a copy of the code.
2. Download your fork of the project locally on your machine or clone it using

   ```
    git clone git@github.com:<your-username>/MERN-Instagram-Clone.git
   ```

3. Navigate to the folder and run `npm i` for installing all packages & dependencies for the server/backend via npm.
4. Navigate to the `client` and run `yarn` to install all dependencies & packages required for the frontend via yarn.

### B. Create API secrets for external services

1. This project uses external services and APIs which require a secret/API pass-key for operations. Please ensure you obtain a pass-key from all these sources before running the project locally.
   - [Cloudinary](https://cloudinary.com/users/register/free) : For storing & fetching images.
   - [SendGrid](https://app.sendgrid.com/) : For sending emails to users upon signup.
   - [MapBox](https://www.mapbox.com/) : For geo-encoding locations on posts.
   - [MongoDB](https://www.mongodb.com/cloud/atlas) : Either a cloud hosted cluster on Mongo Atlas or your local mongo URL.

### C. Create a `.env` file for serving secrets

1. On the root of your project create a new file named `config.env` or run
   ```shell
   touch config.env
   ```
2. Add the following content to the file

   ```env
   NODE_ENV=development

   APP_NAME=My-Insta-Clone

   MONGO_SRV=<MONGO_CLUSTER_SECRET> || mongodb://localhost:27017/insta-clone

   JWT_SECRET=<24_BIT_RANDOM_STRING_FOR_ENCODING_JWT>
   JWT_EXPIRE=90d

   CLOUDINARY_URL=<UNIQUE_CLOUDINARY_URL>

   COOKIE_EXPIRE=60

   SENDGRID_API_KEY=<UNIQUE_SENDGRID_API_KEY>
   SENDGRID_SENDER_EMAIL=<EMAIL_ID_FOR_SENDING_WELCOME_EMAILS>

   ```

### D. Run the project locally

1. Start the express server (via nodemon) for the backend. By default, it starts on port: `3001`
   ```
   npm run dev
   ```
2. Navigate to the client to start the webpack dev server. By default, it starts on port: `3000`.

   ```
   cd client/
   yarn start
   ```