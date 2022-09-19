import { Router } from 'express';
import speakerController from '../controllers/speaker.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { speakerValidation } from '../validations';

const router = Router();

router
  .route('/')
  .get(validate(speakerValidation.createUser), speakerController.getSpeakers)
  .post(
    auth(),
    validate(speakerValidation.getUsers),
    speakerController.createSpeaker
  );

router
  .route('/:speakerId')
  .get(
    auth(),
    validate(speakerValidation.getUser),
    speakerController.getSpeaker
  )
  .patch(
    auth(),
    validate(speakerValidation.patchUser),
    speakerController.updateSpeaker
  )
  .delete(
    auth(),
    validate(speakerValidation.deleteUser),
    speakerController.deleteSpeaker
  );

export default router;
