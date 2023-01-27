const { User } = require('../db/models');

// // промежуточная функция для очистки куки при истёкшей сессии на сервере
// const cookiesCleaner = (req, res, next) => {
//   if (req.cookies.user_sid && !req.session.userid) {
//     res.clearCookie('user_sid');
//     res.redirect('/');
//   } else {
//     next();
//   }
// };

// // промежуточная функция проверки авторизированного пользователя
// const sessionChecker = (req, res, next) => {
//   if (req.session.userid) {
//     res.redirect('/');
//   } else {
//     next();
//   }
// };

// // промежуточная функция наполнения локальных переменных
const resLocals = (req, res, next) => {
  if (req.session?.user_id) {
    res.locals.user = req.session.user_id;
  }

  next();
};

// // // промежуточная функция поиска пользователя в БД по ID из сессии
// const getUser = async (req, res, next) => {
//   if (req.session?.user_id) {
//     res.locals.user = await User.findByPk(Number(req.session.user_id), {
//       raw: true,
//     });
//   }
//   console.log(res.locals.user);
//   next();
// };

// module.exports = {
//   cookiesCleaner, sessionChecker, resLocals, getUser,
// };
module.exports = { resLocals };
