import CardsList from '@/components/features/panel/home/cards-list';
import CourseLibrary from '@/components/features/panel/home/course-library';
import EngagementPerformance from '@/components/features/panel/home/engagement-performance';
import TrainingProgress from '@/components/features/panel/home/training-progress';

export default function PanelPage() {
  return (
    <div className='flex flex-col gap-8'>
      <CardsList />
      <TrainingProgress />
      <CourseLibrary />
      <EngagementPerformance />
    </div>
  );
}
