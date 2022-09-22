import { Router } from 'express';
import validate from '../middlewares/validation';
import dateController from '../controllers/date.controller';
import auth from '../middlewares/auth';
import { dateValidation } from '../validations';
const router = Router();

router
  .route('/')
  .get(validate(dateValidation.getDates), dateController.getDates)
  .post(auth(), validate(dateValidation.createDate), dateController.createDate);

router
  .route('/:dateId')
  .get(auth(), validate(dateValidation.getDate), dateController.getDate)
  .patch(auth(), validate(dateValidation.updateDate), dateController.updateDate)
  .delete(
    auth(),
    validate(dateValidation.deleteDate),
    dateController.deleteDate
  );

export default router;
