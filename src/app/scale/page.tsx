import scaleImg from '/public/images/scale.jpg'
import Hero from '@/components/Hero';

export default function ScalePage() {
  return (
    <Hero imgData={scaleImg} imgAlt="Factory" title="Scale Your App" />
  )
}