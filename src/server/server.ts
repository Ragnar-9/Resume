import * as express from 'express';
import * as path from 'path';
const app = express()
const port = 3000

app.use(express.static(__dirname))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '', 'index.html'));
  });
  app.get('/index.bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, '', 'index.bundle.js'));
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})