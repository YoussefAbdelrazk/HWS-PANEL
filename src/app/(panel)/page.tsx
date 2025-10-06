import CardsList from '@/components/features/panel/home/cards-list';
import CourseLibrary from '@/components/features/panel/home/course-library';
import EngagementPerformance from '@/components/features/panel/home/engagement-performance';
import TrainingProgress from '@/components/features/panel/home/training-progress';
import Banner from '@/components/layout/header/banner';

export default function PanelPage() {
  return (
    <div className='flex flex-col gap-8'>
      <Banner />
      <CardsList />
      <TrainingProgress />
      <CourseLibrary />
      <EngagementPerformance />
    </div>
  );
}
