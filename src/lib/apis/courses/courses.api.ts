import { get } from '@/lib/utils/api';

export const getCourses = async (lang: string = 'en') => {
  const data = await get(`/api/${lang}/courses`);
  return data;
};
