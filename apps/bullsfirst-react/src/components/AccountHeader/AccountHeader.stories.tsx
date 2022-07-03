import { Story, Meta } from '@storybook/react';
import { AccountHeader } from './AccountHeader';

export default {
  title: 'Components/AccountHeader',
  component: AccountHeader,
} as Meta;

const Template: Story = (args) => {
  return <AccountHeader>{args.children}</AccountHeader>;
};

export const AccountHeaderStory = Template.bind({});
AccountHeaderStory.storyName = 'AccountHeader';
AccountHeaderStory.args = {
  children: 'AccountHeader',
};
