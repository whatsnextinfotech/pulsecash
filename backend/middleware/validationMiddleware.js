import { body, param, validationResult } from 'express-validator';

export const validateUserInput = [
  // Basic validation example
  body('firstName').notEmpty().withMessage('First name is required'),
  body('email').isEmail().withMessage('Invalid email format'),
  body('termsAccepted').isBoolean().withMessage('Must accept terms'),
  
  // Handle validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];