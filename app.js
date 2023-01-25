require('@babel/register');

const express = require('express');
const db = require('./db/models');

const config = require('./config/config')


const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/main.routes');

config(app);

app.use('/', mainRouter);


const start = async () => {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Сервер слушает ${PORT} порт`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
