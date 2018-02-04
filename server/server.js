import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use('/*', express.static(path.resolve(__dirname, '../public/index.html')));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
    console.log('Application started!');
});
