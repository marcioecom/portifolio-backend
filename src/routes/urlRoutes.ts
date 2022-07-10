import { createUrlFactory } from '@modules/urls/useCases/createUrl/CreateUrlFactory';
import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => createUrlFactory().handle(req, res));

export { routes as urlRoutes };
