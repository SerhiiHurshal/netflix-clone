import Carousel, { CarouselCardProps } from './carousel/carousel';
import { H2Bold } from './typography';

type Props = {
  title: string;
  items?: CarouselCardProps[];
};

const ContentSection = ({ title, items }: Props) => {
  return (
    <section className='my-[3vw]'>
      <H2Bold className='mx-[4%] mb-2'>{title}</H2Bold>
      <Carousel items={items} />
    </section>
  );
};

export default ContentSection;
