const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('тестирование сервера');
});


module.exports = router;
