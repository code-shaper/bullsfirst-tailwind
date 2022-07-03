import { Story, Meta } from '@storybook/react';
import { ViewVerticalContainer } from '../Containers';
import { SimpleHeader } from '../Header';
import { CenteredMessage } from './CenteredMessage';

export default {
  title: 'Components/CenteredMessage',
  component: CenteredMessage,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <ViewVerticalContainer>
      <SimpleHeader>Centered Message</SimpleHeader>
      <CenteredMessage>{args.children}</CenteredMessage>
    </ViewVerticalContainer>
  );
};

export const CenteredMessageStory = Template.bind({});
CenteredMessageStory.storyName = 'CenteredMessage';
CenteredMessageStory.args = {
  children: 'Hello World!',
};
