const apiErrorHandler = {
  initPasswordReset: {
    400: 'there is no such email',
    default: 'server error'
  },
  resetPassword: {
    400: 'failed to reset password',
    401: 'dont have access to reset password',
    default: 'server error'
  },
  resendCode: {
    400: 'failed to resend code',
    default: 'server error'
  },
  signIn: {
    400: 'wrong login or password',
    default: 'server error'
  },
  signUp: {
    409: 'email is unavailable',
    default: 'server error'
  },
  verifyEmail: {
    400: 'incorrect code',
    default: 'server error'
  },
};

export const getErrorText = (type, error) => {
  const messages = apiErrorHandler[type];
  return messages[error.status] || messages.default;
};
