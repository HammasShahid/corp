import homeImg from '/public/images/home.jpg';
import Hero from '@/components/Hero';

export default function Home() {
  return <Hero imgData={homeImg} imgAlt="Car factory" title="Professional Cloud Hosting" />;
}
