import { CustomError } from "@/errors/errorList";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error:CustomError,req:Request,res:Response,next:NextFunction){
    let status = httpStatus.INTERNAL_SERVER_ERROR

    switch(error.type){

    }
    
    res.status(status).send(error.message)
}