import { ErrorMessages } from "@/types/LoginErrorMessages";

export const validateEmail = (email: string, emailRegex: RegExp) => {
  if (email.length === 0) {
    return ErrorMessages.EMAIL_REQUIRED;
  } else if (!emailRegex.test(email)) {
    return ErrorMessages.EMAIL_INVALID;
  } else {
    return null;
  }
};

export const validatePassword = (password: string, minLength: number) => {
  if (password.length === 0) {
    return ErrorMessages.PASSWORD_REQUIRED;
  } else if (password.length < minLength) {
    return ErrorMessages.PASSWORD_MIN_LENGTH;
  } else {
    return null;
  }
};
