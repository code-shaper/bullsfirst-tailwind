import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <Router>
      <Header>{args.children}</Header>
    </Router>
  );
};

export const HeaderStory = Template.bind({});
HeaderStory.storyName = 'Header';
HeaderStory.args = {
  children: 'Bullsfirst',
};
