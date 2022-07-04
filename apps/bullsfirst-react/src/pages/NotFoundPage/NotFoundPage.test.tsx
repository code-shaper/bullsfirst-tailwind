import { render, screen } from '../../test/test-utils';
import { NotFoundPage } from './NotFoundPage';

describe('<NotFoundPage />', () => {
  test('renders correctly', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });
});
