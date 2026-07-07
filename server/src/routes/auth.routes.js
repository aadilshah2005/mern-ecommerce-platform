import express from 'express';
import { getProfile, loginUser, registerUser, userLogOut } from '../controllers/auth.controller.js';
import { isAuth } from '../middlewares/isAuth.js';

const routes = express.Router();

routes.post('/register', registerUser )
routes.post('/login', loginUser )
routes.get('/me',isAuth, getProfile )
routes.post('/logout',isAuth, userLogOut )

export default routes;