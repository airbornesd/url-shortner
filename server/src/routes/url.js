import { Router } from 'express';
import { createShortUrl, getOriginalUrl } from '../controllers/url.js';

const router = Router();

router.post('/', createShortUrl);
router.get('/:id', getOriginalUrl);

export default router;
