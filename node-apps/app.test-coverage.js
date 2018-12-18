// @flow

import express from 'express';
import path from 'path';
import fs from 'fs';

const buildServer = (rootDirectory: string) => {
  const app = express();
  const homePath = path.join(rootDirectory, '/test-coverage/lcov-report');

  fs.stat(homePath, (err) => {
    // Check if error defined and the error code is "no such file or directory"
    if (err && err.errno === -2) {
      console.log('ERROR:\nYou need to run "npm run test-coverage" before you can run this script.');
    } else if (err) {
      console.log('ERROR:\n', err);
    } else {
      app.use(express.static(homePath));
      app.set('port', process.env.PORT || 3000);

      app.get(
        '/',
        (req: $Subtype<express$Request>, res: express$Response) => {
          res.sendFile(path.join(homePath, '/index.html'));
        },
      );

      app.listen(app.get('port'));
    }
  });
};

export default buildServer;
