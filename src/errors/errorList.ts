export type CustomError = {type:string,message:string|Array<string>}

function invalidDataError(message:string|Array<string>):CustomError{
    return {
        type:'InvalidDataError',
        message:message
    }
}

const errorList = {
    invalidDataError
}

export default errorList