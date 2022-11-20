import { shallow } from 'enzyme';
import { formatShowsData } from '../../utils/formatData';
import { airingTodayShowsMock } from '../../utils/mocks/airingTodayShows.mock';
import Carousel from './carousel';

describe('Carousel', () => {
  it('should render correct amount of items', () => {
    const items = formatShowsData(airingTodayShowsMock);

    const component = shallow(<Carousel items={items} />);

    const renderedItems = component.find({ 'data-testid': 'carousel-item' });

    expect(renderedItems.length).toEqual(items.length);
  });
});
