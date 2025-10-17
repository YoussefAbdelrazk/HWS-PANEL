import { useCustomQuery } from '@/hooks/use-custom';
import { getCourses } from '@/lib/apis/courses/courses.api';

export const useCourses = () => {
  const { data, isLoading, error } = useCustomQuery(['courses'], () => getCourses('en'), {
    select: data => data,
  });
  console.log(data);
  return { data, isLoading, error };
};
