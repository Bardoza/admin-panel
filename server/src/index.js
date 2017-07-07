import app from './app';
import {logger} from './util';

app.listen(3000, function() {
  const {address, port} = this.address();
  logger.info(`Listening on http://${address}:${port}`);
});
