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

const errorList = {
    invalidDataError,
    conflictError
}

export default errorList