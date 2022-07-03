import { render } from '../../test/test-utils';
import { Card } from './Card';

describe('<Card />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Card>Card</Card>);
    expect(asFragment()).toMatchSnapshot();
  });
});
