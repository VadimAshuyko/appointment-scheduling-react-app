import {publicApi} from './api/publicApi';

const authService = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: userData,
      }),
    }),
    signIn: builder.mutation({
      query: (credentials) => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: credentials,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (verificationData) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: verificationData,
      }),
    }),
    resendCode: builder.mutation({
      query: (email) => ({
        url: '/auth/resend-code',
        method: 'POST',
        body: email,
      }),
    }),
    initPasswordReset: builder.mutation({
      query: (email) => ({
        url: '/auth/init-password-reset',
        method: 'POST',
        body: email,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useVerifyEmailMutation,
  useResendCodeMutation,
  useInitPasswordResetMutation,
} = authService;
