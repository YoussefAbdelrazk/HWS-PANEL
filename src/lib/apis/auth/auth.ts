'use server';

import { LoginRequest, RegistrationStep1Request, RegistrationStep2Request } from '@/lib/types/auth';
import { post } from '@/lib/utils/api';

/**
 * Login user
 * @param data Login credentials
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<LoginResponse>
 */
export const login = async (data: LoginRequest, lang: string = 'en') => {
  const endpoint = `/api/${lang}/auth/login`;
  return await post(endpoint, data);
};

/**
 * Register user - Step 1: Submit registration data
 * @param data Registration data for step 1
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<RegistrationStep1Response>
 */
export const registerStep1 = async (data: RegistrationStep1Request, lang: string = 'en') => {
  const endpoint = `/api/${lang}/auth/register`;
  return await post(endpoint, data);
};

/**
 * Verify registration OTP - Step 2: Verify email with OTP
 * @param data OTP verification data
 * @param lang Language code (e.g., 'en', 'ar')
 * @returns Promise<RegistrationStep2Response>
 */
export const verifyRegistrationOTP = async (
  data: RegistrationStep2Request,
  lang: string = 'en',
) => {
  const endpoint = `/api/${lang}/auth/verify-registration-otp`;
  return await post(endpoint, data);
};
