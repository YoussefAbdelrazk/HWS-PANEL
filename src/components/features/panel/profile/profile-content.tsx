import { Button } from '@/components/ui/button';
import AvailabilityScheduleSection from './availability-schedule-section';
import GymDetailsSection from './gym-details-section';
import LocationDetailsSection from './location-details-section';
import ProfileBanner from './profile-banner';
import TrainerInformationSection from './trainer-information-section';

export default function ProfileContent() {
  return (
    <div className='min-h-screen'>
      {/* Profile Banner */}
      <ProfileBanner />

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-8 space-y-8'>
        {/* Trainer Information */}
        <TrainerInformationSection />

        {/* Location Details */}
        <LocationDetailsSection />

        {/* Gym Details */}
        <GymDetailsSection />

        {/* Availability & Schedule */}
        <AvailabilityScheduleSection />

        {/* Save Changes Button */}
        <div className='flex justify-end pt-6'>
          <Button className='bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3 text-lg font-semibold'>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
