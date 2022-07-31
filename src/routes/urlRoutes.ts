import { createUrlFactory } from '@modules/urls/useCases/createUrl/CreateUrlFactory';
import { getUrlFactory } from '@modules/urls/useCases/getUrl/GetUrlFactory';
import { Router } from 'express';

const routes = Router();

routes.get('/:id', (req, res) => getUrlFactory().handle(req, res));
routes.post('/', (req, res) => createUrlFactory().handle(req, res));

export { routes as urlRoutes };
