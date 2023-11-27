// const express = require('express')
import "dotenv/config";
import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
app.use(
    cors({
        credentials: true, // support cookies
        origin: "http://localhost:3000" // restrict cross origin resource sharing to the react application
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false
};
app.use(session(sessionOptions));
app.use(express.json()); // must be AFTER session configuration

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

console.log("started the server...");
app.listen(process.env.PORT || 4000); // Listen to http://localhost:4000