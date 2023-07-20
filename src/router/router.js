import { Router } from "express";
import {  upload } from "../controller/upload/upload";
export const router = Router();


router.post("/upload",upload)
