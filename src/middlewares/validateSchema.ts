import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import errorList from '@/errors/errorList';

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'body');
}

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'params');
}

function validate(schema: ObjectSchema, type: 'body' | 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      let errorMessage = '';
      error.details.forEach((d) => (errorMessage += d.message + ' '));
      throw errorList.invalidDataError(errorMessage);
    }
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;