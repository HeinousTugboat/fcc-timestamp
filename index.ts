import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const port = process.argv[2] || 58808;

app.use(bodyParser.json());
app.get('/*', (req, res) => {
    console.log('foo');
    res.send({name: 'foo', body: req.body, params: req.params});
});

app.listen(port, () => {
    console.log('Listening on '+port+'!');
});
