var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

// ### nuevas rutas
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

// ### Página de créditos
router.get('/author', function(req, res) {
  res.render('author', { autor: 'José Ibáñez'});
});


module.exports = router;
