
//components
import Hero from '@/components/Hero';
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <section className="flex flex-col sm:flex-row" >
      <SideBar/>
      <Hero />
    </section>
  );
}
