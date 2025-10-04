import Banner from '@/components/layout/header/banner';
import Navbar from '@/components/layout/header/navbar';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className='max-w-[1240px] mx-auto px-4 w-full mt-12  '>{children}</div>
    </div>
  );
}
