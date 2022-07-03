import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '../../test/test-utils';
import { Header } from './Header';

describe('<Header />', () => {
  test('renders correctly', () => {
    render(
      <Router>
        <Header>Header</Header>
      </Router>
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
