import { Story, Meta } from '@storybook/react';
import { ViewCenteredMessage } from './ViewCenteredMessage';

export default {
  title: 'Components/ViewCenteredMessage',
  component: ViewCenteredMessage,
} as Meta;

const Template: Story = (args) => {
  return <ViewCenteredMessage>{args.children}</ViewCenteredMessage>;
};

export const ViewCenteredMessageStory = Template.bind({});
ViewCenteredMessageStory.storyName = 'ViewCenteredMessage';
ViewCenteredMessageStory.args = {
  children: 'Hello World!',
};
