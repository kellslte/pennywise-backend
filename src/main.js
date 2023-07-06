// import dependencies
import express from 'express';
import config from './config/main.config.js';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import appRouter from './routes/main.routes.js';
import connectToDatabase from './database/config.database.js';


// define handlers
const app = express();
app.use( express.json() );
app.use( cors() );
app.use( helmet() );
app.use( morgan( 'dev' ) );

// define route handlers
app.use("api/v1/", appRouter)

// connect to database
connectToDatabase( config );

// tests
//console.log(generateAccountNumber());

// start server
app.listen(config.server.port, () => console.log(`🚀 Application is listening on ${config.server.port}`));