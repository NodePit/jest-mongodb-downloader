# jest-mongodb-downloader

When run, this script simply downloads the MongoDB version defined in `jest-mongodb-config.js`.

## Why?

But [`jest-mongodb`](https://github.com/shelfio/jest-mongodb) does this automatically upon start, so why would you want to do this? -- When explicitly triggering the download, you can make use of Docker’s caching, and avoid downloading MongoDB again and again if you just modified some source code.

## Usage

1. Install with `yarn add @nodepit/jest-mongodb-downloader -D`

2. Add the following line to your Dockerfile **before** running the tests and copying the source code (make sure that `jest-mongodb-config.js` is already in the image)

   ```Dockerfile
   COPY jest-mongodb-config.js ./
   RUN yarn run jest-mongodb-downloader
   ```

3. Give a GitHub star to say “Thank you, NodePit!”

- - -

Copyright [nodepit.com](https://nodepit.com), 2020.
