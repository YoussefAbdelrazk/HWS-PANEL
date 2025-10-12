'use server';

import {
  ForgotPasswordStep1Request,
  ForgotPasswordStep1Response,
  ForgotPasswordStep2Request,
  ForgotPasswordStep2Response,
  ForgotPasswordStep3Request,
  ForgotPasswordStep3Response,
  LoginRequest,
  LoginResponse,
  RegistrationStep1Request,
  RegistrationStep1Response,
  RegistrationStep2Request,
  RegistrationStep2Response,
} from '@/lib/types/auth';
import { ApiResponse, post } from '@/lib/utils/api';

/**
 * Login user
 * @param data Login credentials
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<ApiResponse<LoginResponse>>
 */
export const login = async (
  data: LoginRequest,
  lang: string = 'en',
): Promise<ApiResponse<LoginResponse>> => {
  const endpoint = `/api/${lang}/auth/login`;
  return await post<LoginResponse>(endpoint, data);
};

/**
 * Register user - Step 1: Submit registration data
 * @param data Registration data for step 1
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<ApiResponse<RegistrationStep1Response>>
 */
export const registerStep1 = async (
  data: RegistrationStep1Request,
  lang: string = 'en',
): Promise<ApiResponse<RegistrationStep1Response>> => {
  const endpoint = `/api/${lang}/auth/register`;
  return await post<RegistrationStep1Response>(endpoint, data);
};

/**
 * Verify registration OTP - Step 2: Verify email with OTP
 * @param data OTP verification data
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<ApiResponse<RegistrationStep2Response>>
 */
export const verifyRegistrationOTP = async (
  data: RegistrationStep2Request,
  lang: string = 'en',
): Promise<ApiResponse<RegistrationStep2Response>> => {
  const endpoint = `/api/${lang}/auth/verify-registration-otp`;
  return await post<RegistrationStep2Response>(endpoint, data);
};

/**
 * Request password reset - Step 1: Send OTP to email
 * @param data Email for password reset
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<ApiResponse<ForgotPasswordStep1Response>>
 */
export const requestPasswordReset = async (
  data: ForgotPasswordStep1Request,
  lang: string = 'en',
): Promise<ApiResponse<ForgotPasswordStep1Response>> => {
  const endpoint = `/api/${lang}/auth/request-password-reset`;
  return await post<ForgotPasswordStep1Response>(endpoint, data);
};

/**
 * Verify password reset OTP - Step 2: Verify OTP for password reset
 * @param data OTP verification data for password reset
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<ApiResponse<ForgotPasswordStep2Response>>
 */
export const verifyPasswordResetOTP = async (
  data: ForgotPasswordStep2Request,
  lang: string = 'en',
): Promise<ApiResponse<ForgotPasswordStep2Response>> => {
  const endpoint = `/api/${lang}/auth/verify-password-reset-otp`;
  return await post<ForgotPasswordStep2Response>(endpoint, data);
};

/**
 * Complete password reset - Step 3: Set new password
 * @param data New password data
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<ApiResponse<ForgotPasswordStep3Response>>
 */
export const completePasswordReset = async (
  data: ForgotPasswordStep3Request,
  lang: string = 'en',
): Promise<ApiResponse<ForgotPasswordStep3Response>> => {
  const endpoint = `/api/${lang}/auth/complete-password-reset`;
  return await post<ForgotPasswordStep3Response>(endpoint, data);
};
