import Banner from '@/components/layout/header/banner';
import Navbar from '@/components/layout/header/navbar';

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <div className=' '>{children}</div>
    </div>
  );
}
