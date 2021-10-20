import * as dotenv from 'dotenv';
import express from 'express';
import errorHandler from './handlers/error_handler';
import notFoundHandler from './handlers/not_found_handler';

const SERVER_MESSAGE = 'Server is live at';
const PORT = '8080';

const portCheck = () => {
  return `${SERVER_MESSAGE} ${PORT}`;
};

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  // Disabling rule as this is used to check that the server is running
  // eslint-disable-next-line no-console
  console.log(portCheck());
});