import Navbar from '@/components/layout/header/navbar';
import Banner from '@/components/layout/header/banner';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className='max-w-[1240px] mx-auto px-4 w-full'>{children}</div>
    </div>
  );
}
