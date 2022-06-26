import express from 'express';
import route from './route';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

export default app;
