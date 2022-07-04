import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AccountHeader } from './AccountHeader';

export default {
  title: 'Components/AccountHeader',
  component: AccountHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = () => {
  return (
    <Router>
      <AccountHeader />
    </Router>
  );
};

export const AccountHeaderStory = Template.bind({});
AccountHeaderStory.storyName = 'AccountHeader';
