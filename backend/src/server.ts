import './database/connection';

import express from 'express';
import path from 'path';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);
