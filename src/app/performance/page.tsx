import Hero from '@/components/Hero';
import performanceImg from '/public/images/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt="Machine Welding"
      title="High Performance Applications"
    />
  );
}
