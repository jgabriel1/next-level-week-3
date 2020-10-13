import { Router } from 'express';

import OrphanagesController from './controllers/OrphanagesController';

const router = Router();

router.get('/orphanages', OrphanagesController.index);
router.get('/orphanages/:id', OrphanagesController.show);
router.post('/orphanages', OrphanagesController.create);

export { router };
