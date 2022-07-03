import { render } from '../../test/test-utils';
import { SimpleHeader } from './SimpleHeader';

describe('<SimpleHeader />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<SimpleHeader>Bullsfirst</SimpleHeader>);
    expect(asFragment()).toMatchSnapshot();
  });
});
