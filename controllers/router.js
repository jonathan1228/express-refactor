var express = require('express');
var router = express.Router();
var song = require('.././models/songs');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/song/edit', function(req, res) {
  res.render('edit');
});

router.get('/song/update', function(req, res) {
  if (req.query.verse1 !== undefined) {
    song.verse1 = req.query.verse1;
    song.verse2 = req.query.verse2;
    song.verse3 = req.query.verse3;
  }
  res.redirect('/');
})

router.get('/song/1', function(req, res) {
  res.render('song', {
    pageInfo: song.verse1,
    nextPage: '1/2',
  });
});

router.get('/song/1/2', function(req, res) {
  res.render('song', {
    pageInfo: song.verse2,
    nextPage: '2/3',
  });
});

router.get('/song/1/2/3', function(req, res) {
  res.render('song', {
    pageInfo: song.verse3,
    nextPage: '/song/1',
  });
});

module.exports = router;