import { render, screen } from '../../test/test-utils';
import { AccountHeader } from './AccountHeader';

describe('<AccountHeader />', () => {
  test('renders correctly', () => {
    render(<AccountHeader />);
    expect(screen.getByText('Holdings')).toBeInTheDocument();
  });
});
