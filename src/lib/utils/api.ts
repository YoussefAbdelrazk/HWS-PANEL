import { handleError } from '@/lib/utils/error-handler';
import { baseAPI } from './config';

// GET request
export const get = async (endpoint: string) => {
  const api = await baseAPI();
  const response = await api.get(endpoint);
  return response?.data;
};

// POST request
export const post = async (endpoint: string, payload: unknown) => {
  try {
    const api = await baseAPI();
    const response = await api.post(endpoint, payload);
    return {
      success: response?.data?.isSuccess ?? true,
      data: response?.data,
      message: response?.data?.message || response?.data?.data?.message || 'OK',
      errors: {},
    };
  } catch (error) {
    return handleError(error);
  }
};

// PUT request
export const put = async (endpoint: string, payload: unknown) => {
  try {
    const api = await baseAPI();
    const response = await api.put(endpoint, payload);
    return {
      success: response?.data?.isSuccess ?? true,
      data: response?.data,
      message: response?.data?.message || 'OK',
      errors: {},
    };
  } catch (error) {
    return handleError(error);
  }
};
