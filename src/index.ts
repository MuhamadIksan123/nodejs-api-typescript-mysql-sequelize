import express, { Request, Response} from 'express';

const app = express();

import dotenv from 'dotenv';

dotenv.config();

app.get('/', (req: Request, res: Response) => {
  return res.status(200).send({
    response: 'Express Typescript',
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log(
    `${process.env.APP_NAME} Running on port ${process.env.APP_PORT}`
  );
});
