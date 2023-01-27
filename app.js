require('@babel/register');
const cookieParser = require('cookie-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const session = require('express-session');

const express = require('express');
const path = require('path');
const db = require('./db/models');

const config = require('./config/config');

const app = express();
const PORT = process.env.PORT || 3000;

const mainRouter = require('./routes/main.routes');

const regRoute = require('./routes/reg.routes');
const logoutRoute = require('./routes/logout.routes');
const authRoutes = require('./routes/authRoutes');
const cardShowRouter = require('./routes/cardshow.routes');



const ssr = require('./middlewares/ssr');
const sessionConfig = require('./config/session');

config(app);

app.use(express.static(path.join(__dirname, 'public')));

app.use(ssr);

app.use(cookieParser());
app.use(session(sessionConfig));

app.use('/reg', regRoute);
app.use('/logout', logoutRoute);
app.use('/auth', authRoutes);

// app.use('/', mainRouter);
// app.use('/main', cardShowRouter);



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
