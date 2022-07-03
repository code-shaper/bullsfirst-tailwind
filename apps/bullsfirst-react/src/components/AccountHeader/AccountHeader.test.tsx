import { render, screen } from '../../test/test-utils';
import { AccountHeader } from './AccountHeader';

describe('<AccountHeader />', () => {
  test('renders correctly', () => {
    render(<AccountHeader>AccountHeader</AccountHeader>);
    expect(screen.getByText('AccountHeader')).toBeInTheDocument();
  });
});
