import { render, screen } from '../../test/test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  test('renders correctly', () => {
    render(<Header>Header</Header>);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});