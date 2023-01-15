/* eslint-disable @next/next/no-img-element */

export type CarouselCardProps = {
  id: string;
  poster_path: string;
};

export type CarouselProps = {
  items?: CarouselCardProps[];
};

const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className='max-w-full overflow-auto  whitespace-nowrap mx-[4%]'>
      <div className='flex pb-2 overflow-auto w-fit whitespace-nowrap'>
        {items?.map((item) => (
          <div
            key={`carousel-item-${item.id}`}
            data-testid='carousel-item'
            className='w-[20%] min-w-[20%] px-[.2vw]'
          >
            <img
              alt='poster'
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              className='h-[11vw] object-cover object-bottom  rounded-[.2vw]'
              width='100%'
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
