import { render } from '../../test/test-utils';
import { ViewCenteredMessage } from './ViewCenteredMessage';

describe('<ViewCenteredMessage />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(
      <ViewCenteredMessage>ViewCenteredMessage</ViewCenteredMessage>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
