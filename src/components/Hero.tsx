import Image, { StaticImageData } from 'next/image';

interface Props {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero({ imgData, imgAlt, title }: Props) {
  return (
    <div>
      <div className="absolute -z-10 inset-0 ">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
      </div>
      <h1 className="text-white text-6xl text-center uppercase tracking-widest leading-normal absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">{title}</h1>
    </div>
  );
}
