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
    <div className='flex overflow-auto whitespace-nowrap'>
      {items?.map((item) => (
        <div
          key={`carousel-item-${item.id}`}
          data-testid='carousel-item'
          className='w-40 m-1'
        >
          <img
            alt='poster'
            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            className='h-56 p-1'
            width='w-40'
            loading='lazy'
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
