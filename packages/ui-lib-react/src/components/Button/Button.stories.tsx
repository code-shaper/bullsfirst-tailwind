import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => {
  return (
    <Button
      rootClass={args.rootClass}
      color={args.color}
      onClick={args.onClick}
    >
      {args.text}
    </Button>
  );
};

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  text: 'Button',
  rootClass: '',
  color: 'primary',
};
