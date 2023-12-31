import { CustomError } from "@/errors/errorList";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorHandler(error:CustomError,req:Request,res:Response,next:NextFunction){
    let status:number = httpStatus.INTERNAL_SERVER_ERROR

    switch(error.type){
        case "invalidDataError":
            status = httpStatus.UNPROCESSABLE_ENTITY
            break
        case "ConflictError":
            status = httpStatus.CONFLICT
            break
        case "NotFound":
            status = httpStatus.NOT_FOUND
            break
    }
    
    res.status(status).send(error.message)
}