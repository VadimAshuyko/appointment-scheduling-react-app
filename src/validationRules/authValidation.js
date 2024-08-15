export const usernameValidation = {
  required: 'required username',
  minLength: {
    value: 1,
    message: 'min username length'
  },
  maxLength: {
    value: 32,
    message: 'max username length'
  }
};

export const emailValidation = {
  required: 'required email',
  maxLength: {
    value: 320,
    message: 'max email length'
  },
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'invalid email format'
  }
};

export const passwordValidation = {
  required: 'required password',
  minLength: {
    value: 8,
    message: 'min password length'
  },
  maxLength: {
    value: 32,
    message: 'max password length'
  },
  pattern: {
    value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+[\]{}|;:'",.<>?/~`\\-]{8,32}$/,
    message: 'invalid password format'
  }
};
