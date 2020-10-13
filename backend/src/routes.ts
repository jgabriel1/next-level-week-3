import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const router = Router();

router.post('/orphanages', OrphanagesController.create);

export { router };
