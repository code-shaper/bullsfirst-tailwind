import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, LinkButton } from './Button';

describe('<Button />', () => {
  test('colors render correctly', () => {
    const { asFragment } = render(
      <div>
        <Button color="default">Submit</Button>
        <Button color="primary">Submit</Button>
        <Button color="secondary">Submit</Button>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('class can be added via className prop', () => {
    const { asFragment } = render(<Button className="ml-2">Submit</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<LinkButton />', () => {
  test('colors render correctly', () => {
    const { asFragment } = render(
      <Router>
        <LinkButton color="default" to="/home">
          Submit
        </LinkButton>
        <LinkButton color="primary" to="/home">
          Submit
        </LinkButton>
        <LinkButton color="secondary" to="/home">
          Submit
        </LinkButton>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('class can be added via className prop', () => {
    const { asFragment } = render(
      <Router>
        <LinkButton className="ml-2" to="/home">
          Submit
        </LinkButton>
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
