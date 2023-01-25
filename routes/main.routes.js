const router = require('express').Router();
const Main = require('../views/Main.jsx')

router.get('/', (req, res) => {
  try {
    res.renderComponent(Main, { title: 'Main page' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
