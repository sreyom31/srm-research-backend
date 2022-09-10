import { Router } from 'express';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/papers', route: paperRoute },
  { path: '/speakers', route: speakerRoute },
  { path: '/dates', route: dateRoute },
  { path: '/gallery', route: galleryRoute },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
}

export default router;