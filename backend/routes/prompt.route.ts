import { Router } from 'express';
import { promptGPT } from '../controllers/prompt.controller';

const router: Router = Router();

router.post('/gpt', promptGPT);

export default router;
