import CardsList from '@/components/features/panel/home/cards-list';
import TrainingProgress from '@/components/features/panel/home/training-progress';

export default function PanelPage() {
  return (
    <div className='flex flex-col gap-8'>
      <CardsList />
      <TrainingProgress />
    </div>
  );
}
