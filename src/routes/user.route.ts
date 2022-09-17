import { Router } from 'express';
const router = Router();

router.route('/').post(userController.createUser).get(userController.getUsers);

router
  .route('/:userId')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
