import express from 'express';
import { signup } from '../controllers/user.controller.js';



const router = express.Router();


router.post('/signup', signup); // controller me se export krwaaye hai isko dhyaan se dekh lo upar me.


export default router;