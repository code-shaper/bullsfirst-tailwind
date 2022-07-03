import { render } from '../../test/test-utils';
import { CenteredMessage } from './CenteredMessage';

describe('<CenteredMessage />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <CenteredMessage>CenteredMessage</CenteredMessage>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
