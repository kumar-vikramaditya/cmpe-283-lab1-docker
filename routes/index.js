var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});



router.get('/Student', function(req, res) {
    var db = req.db;
    var collection = db.get('Student');
    collection.find({},{},function(e,docs){
        res.render('Student', {
            "Student" : docs
        });
    });
});



module.exports = router;
