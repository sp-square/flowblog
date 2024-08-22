import express from 'express';
import passport from 'passport';
import * as UsersController from '../controllers/users';

const router = express.Router();

router.post('/signup', UsersController.signUp);

// the login logic is handle in the passport local strategy
router.post('/login', passport.authenticate('local'), (req, res) =>
	res.status(200).json(req.user)
); // 'user' is returned from the local strategy and we can get it out of the req object

export default router;
