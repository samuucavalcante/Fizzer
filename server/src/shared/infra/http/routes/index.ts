import { Router } from 'express';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';

const app = Router();

app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
export default app;
