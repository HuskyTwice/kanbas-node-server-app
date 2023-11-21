// const express = require('express')
import "dotenv/config";
import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';

const app = express();
app.use(cors());
app.use(express.json());

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

app.listen(process.env.PORT || 4000); // Listen to http://localhost:4000