import { render } from '@testing-library/react';
import { Button } from './Button';

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

  test('class can be added via rootClass prop', () => {
    const { asFragment } = render(<Button rootClass="ml-2">Submit</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
