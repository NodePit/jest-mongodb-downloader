#!/usr/bin/env node

import { MongoBinary } from 'mongodb-memory-server';
import { resolve } from 'path';
import cwd from 'cwd';

// downloads MongoDB which is using by mongodb-memory-server
// resp. jest-mongodb. Usually this would happen implicitly
// before running the tests, but we explicitly want to trigger
// it to make use of the Docker caching

// load the `jest-mongodb-config.js` (copied from node_modules/@shelf/jest-mongodb/setup.js)
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const { mongodbMemoryServerOptions } = require(resolve(cwd(), 'jest-mongodb-config.js'));
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
MongoBinary.getPath(mongodbMemoryServerOptions.binary).catch(err => {
  console.error(err);
  process.exit(1);
});
