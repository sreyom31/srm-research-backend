import { Router } from 'express';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { paperValidation } from '../validations';
import paperController from '../controllers/paper.controller';

const router = Router();

router
  .route('/')
  .get(auth(), validate(paperValidation.getPapers), paperController.getPapers)
  .post(
    auth(),
    validate(paperValidation.createPaper),
    paperController.createPaper
  );

router
  .route('/:paperId')
  .get(auth(), validate(paperValidation.getPaper), paperController.getPaper)
  .patch(
    auth(),
    validate(paperValidation.updatePaper),
    paperController.updatePaper
  )
  .delete(
    auth(),
    validate(paperValidation.deletePaper),
    paperController.deletePaper
  );

export default router;
