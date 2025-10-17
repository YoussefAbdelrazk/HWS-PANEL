import ReleaseDetailsContent from '@/components/features/panel/hawssa-releases/release-details-content';

interface ReleaseDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ReleaseDetailsPage({ params }: ReleaseDetailsPageProps) {
  const { slug } = await params;

  return (
    <div className='min-h-screen bg-gray-100'>
      <ReleaseDetailsContent slug={slug} />
    </div>
  );
}
