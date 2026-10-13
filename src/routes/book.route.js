import { Router } from "express";
import { registerBooksController } from "../contollers/book.controller.js";

export const bookRouter =Router();

bookRouter.post("/register", registerBooksController);
