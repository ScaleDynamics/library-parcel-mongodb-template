# Ready to use library template for ScaleDynamics platform

This template is configured for the ScaleDynamics web platform. It is ready to use to build your own library. All is pre-configured: we provide one command to develop with live reload and one to deploy to make it live on a url.

One particularity of our platform is that you don’t have to manage the [Express](https://expressjs.com/) layers, the platform manages them for you automatically, so you can focus only on the MongoDB/Node/Front coding.

Note that you need a ScaleDynamics account for deployment (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/)).


## How to use

Go in `library` folder and run those commands:

### Project setup

```sh
npm install
```


### Live-reload for development

To enter a live-reload development session, use the command below. Feel free to update your code, it will be rebuilt at each change.


```sh
npm run dev
```

Note that when running this command, you have to select a project. On the ScaleDynamics platform, a project identifies an application or a microservice. If you are logged, select an existing project or create a new one. Else, you can use the platform anonymously. For more details on projects, see the [documentation](https://docs.scaledynamics.com).

#### Deploy with ScaleDynamics

First you have to compile and minify your project for production

```sh
npm run build
```

Then use your ScaleDynamics account credential to log in to the platform (create a FREE community account [here](https://console.scaledynamics.com/auth/signup/))

```sh
npx warp login
```

Create an environment for your deployment

```sh
npx warp env create
```

This is important. To work properly, your project need the right environment. An environment identifies the cloud execution environment to run your app. You can create as many as you want like ‘staging’, ‘demo’, ‘prod’... Each environment has its own url. When you use it locally, it should be `auto` (warp use this by default). But when you deploy it, it should be the name of your environment you use for deployment. 

Open the `index.js` file in `library`. When using the constructor for accessing the backend function, it pass en `env` parameter. You can directly change it before deploying or create a `.env` file  and set your environment through it, Parcel will do his magic and set it up during the build. For more information on how Parcel do it, click [here](https://en.parceljs.org/env.html#%F0%9F%8C%B3-environment-variables).

Finally, use the deploy command

```sh
npm run deploy
```

Note that when running this command, you have to select an environment. 

To deploy, select an existing environment or create a new one. For more details on projects or environments, see the [documentation](https://docs.scaledynamics.com).

## Template structure

This project is divided in two parts:
  - the frontend, a `library` template library.
  - the backend with a node module and a MongoDB module. You can update the frontend/backend as you need to build your own app.

Regarding MongoDB, we provide a template module  in the `src/mongodb.js`. To use your own MongoDB instance, replace the `URI` constant by your own.

```js
const URI = 'mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]';
```


You can create new functions that can be called by the library. Add them in `src/index.js` or into another module and export it. The platform manages the [Express](https://expressjs.com/) layers automatically.


```js
const myFunction = () => {
  // your code here
}

module.exports = { myFunction };
```

To access your new functions, you can import your back in a js file and use your function like :

```js
import Microservice from './.microservice/microservice.js';

const { myFunction } = new Microservice({
  env: process.env.DEPLOY_ENV || 'auto',
});
```
## Documentation

If you need more information, you can refer to the documentation:
  - [ScaleDynamics Platform](https://docs.scaledynamics.com/docs/frameworks)
  - [MongoDB](https://docs.mongodb.com/guides/)

Here are some links to useful libraries :
  - [Axios](https://github.com/axios/axios)
  - [Parcel](https://parceljs.org/)


## License

Copyright 2021 ScaleDynamics SAS. All rights reserved.
Licensed under the MIT license.