var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ids', function(req, res, next) {
  res.locals.connection.query('select * from secretboard', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });
});

router.post('/create', (req, res, next) => {
  console.log(req.body);
  res.locals.connection.query("insert into secretboard(text, password) values('" + req.body.text + "','" + req.body.password + "')", 
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

router.get('/delete/:id', (req, res, next) => {
  console.log("delete:", req.params.id);
  res.locals.connection.query('delete from secretboard where id=' + req.params.id, (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

router.post('/update', (req, res, next) => {
  console.log("update:", req.body);
  res.locals.connection.query("update secretboard set text = '" + req.body.text + 
    "',password = '" + req.body.password + "' where id = '" + req.body.id + "'",
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
    });
});

module.exports = router;