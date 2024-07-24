import { useState } from "react";

const useValidation = () => {
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const PASSWORD_MIN_LENGTH = 8;

  return { emailRegex, PASSWORD_MIN_LENGTH };
};

export default useValidation;
