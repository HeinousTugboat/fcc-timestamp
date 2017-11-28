import * as express from 'express';

const app = express();
const port = process.env.PORT;
app.get('/*', (req, res) => {
    const path = decodeURI(req.path.slice(1));
    const num = parseInt(path);
    let date;
    if (!isNaN(num)) {
        date = new Date(num);
    } else {
        date = new Date(path);
    }
    res.send({unix: date.getTime(), natural: date.toLocaleDateString()});
});

app.listen(port, () => {
    console.log('Listening on '+port+'! '+ new Date(Date.now()));
});
