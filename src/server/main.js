/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 * @flow strict
 */

import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import swapiSchema from '../schema';

const app = express();

app.use(cors());

// Requests to /graphql redirect to /
app.all('/graphql', (req, res) => res.redirect('/'));

app.use(
  '/',
  graphqlHTTP(() => ({
    schema: swapiSchema,
    graphiql: true,
  })),
);

// Listen for incoming HTTP requests
const listener = app.listen(8888);
