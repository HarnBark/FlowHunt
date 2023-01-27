require('@babel/register');

const express = require('express');
const path = require('path');
const db = require('./db/models');

const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/main.routes');
const cardShowRouter = require('./routes/cardshow.routes');
const indexRouter = require('./routes/index.routes');
const candidateRouter = require('./routes/candidate.routes')
const ssr = require('./middlewares/ssr');

config(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(ssr);
// app.use('/main', cardShowRouter);
app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/candidate', candidateRouter);

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
