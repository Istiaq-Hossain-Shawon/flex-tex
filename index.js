"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
//mysql setting
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '',
//   database: 'test'
// });
// connection.connect();
//cors setting
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
// Get example
var router = express_1["default"].Router();
router.get('/api/getTest', function (req, res) {
    res.send("hello world");
});
//Post example
// router.post('/api/postTest', (req, res) => {
//  Utility.connection.query('select * from test', function (err, results, fields) {
//     if (err) throw err
//     console.log(results);
//     res.send(results)
//   });
// })
app.use(router);
// app.use('/murmurs',murmurRouter);
// app.use('/user',usersRouter);
app.listen(3000, function () { console.log('Example app listening on port 300-!'); });
