export type CustomError = {type:string,message:string|Array<string>}

function invalidDataError(message:string|Array<string>):CustomError{
    return {
        type:'InvalidDataError',
        message:message
    }
}

function conflictError(message:string):CustomError{
    return{
        type:'ConflictError',
        message:message
    }
}

function notFoundError(message:string):CustomError{
    return{
        type:'NotFound',
        message:message
    }
}

const errorList = {
    invalidDataError,
    conflictError,
    notFoundError
}

export default errorList