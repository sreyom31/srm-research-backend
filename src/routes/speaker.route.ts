import { Router } from 'express';
import speakerController from '../controllers/speaker.controller';
import auth from '../middlewares/auth';
import validate from '../middlewares/validation';
import { speakerValidation } from '../validations';

const router = Router();

router
  .route('/')
  .get(validate(speakerValidation.getSpeakers), speakerController.getSpeakers)
  .post(
    auth(),
    validate(speakerValidation.createSpeaker),
    speakerController.createSpeaker
  );

router
  .route('/:speakerId')
  .get(
    auth(),
    validate(speakerValidation.getSpeaker),
    speakerController.getSpeaker
  )
  .patch(
    auth(),
    validate(speakerValidation.patchSpeaker),
    speakerController.updateSpeaker
  )
  .delete(
    auth(),
    validate(speakerValidation.deleteSpeaker),
    speakerController.deleteSpeaker
  );

export default router;
