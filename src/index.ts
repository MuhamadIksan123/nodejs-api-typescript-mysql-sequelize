import express, { Request, Response} from 'express';

import router from './router/Routes';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    response: 'Express Typescript',
  });
});

app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `${process.env.APP_NAME} Running on port ${process.env.APP_PORT}`
  );
});
