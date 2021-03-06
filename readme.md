# jest-mongodb-downloader

## DEPRECATION NOTE

We no longer need this -- there’s a **MUCH** easier workaround:

1. If you rely on the default MongoDB version anyways -- all is fine. The MongoDB binary is downloaded on `postinstall`. Done!

2. To configure a different version, do **not** specify it in `jest-mongodb-config.js`, but instead in the project’s `package.json`. This way, `postinstall` will install the specified version right-away!

   ```
   "config": {
     "mongodbMemoryServer": {
       "version": "4.2.8"
     }
   }
   ```

---

When being run, this script simply downloads the MongoDB version defined in `jest-mongodb-config.js`.

## Why?

But [`jest-mongodb`](https://github.com/shelfio/jest-mongodb) does this automatically upon start, so why would you want to do this? -- When explicitly triggering the download, you can make use of Docker’s caching, and avoid downloading MongoDB again and again if you just modified some source code.

## Usage

1. Install with `yarn add @nodepit/jest-mongodb-downloader -D`

2. Add the following line to your Dockerfile **before** running the tests and copying the source code (make sure that `jest-mongodb-config.js` is already in the image).

   Add `MONGOMS_DISABLE_POSTINSTALL` to prevent downloading the default version of MongoDB and only install the version which is specified in the `jest-mongodb-config.js`.

   ```Dockerfile
   ENV MONGOMS_DISABLE_POSTINSTALL=1
   RUN yarn
   COPY jest-mongodb-config.js ./
   RUN yarn run jest-mongodb-downloader
   ```

3. Give a GitHub star to say “Thank you, NodePit!”

- - -

Copyright [nodepit.com](https://nodepit.com), 2020.
