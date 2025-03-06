var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/photos', async function(req, res, next) {

  const URL = 'https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json'
  
  const response = await axios.get(URL) //de ser necesario, incluya la constante config como segundo parámetro del método get

  res.render('fotos', { title: 'Fotos', fotos: response.data });
});

module.exports = router;