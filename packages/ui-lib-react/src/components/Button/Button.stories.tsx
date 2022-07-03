import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card } from '../Card';
import { Button, LinkButton } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Button
    className={args.className}
    variant={args.variant}
    color={args.color}
    size={args.size}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  className: '',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  disabled: false,
  text: 'Button',
};

export const ButtonVariationsStory = () => {
  return (
    <Card className="max-w-3xl p-6">
      <h1 className="text-2xl font-medium">Buttons</h1>

      <h2 className="text-xl mt-4">Contained Buttons</h2>
      <div className="mt-1">
        <Button>Default</Button>
        <Button className="ml-2" color="primary">
          Primary
        </Button>
        <Button className="ml-2" color="secondary">
          Secondary
        </Button>
        <Button className="ml-2" disabled>
          Disabled
        </Button>
      </div>

      <h2 className="text-xl mt-6">Outlined Buttons</h2>
      <div className="mt-1">
        <Button variant="outlined">Default</Button>
        <Button className="ml-2" variant="outlined" color="primary">
          Primary
        </Button>
        <Button className="ml-2" variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button className="ml-2" variant="outlined" disabled>
          Disabled
        </Button>
      </div>

      <h2 className="text-xl mt-6">Sizes</h2>
      <div className="mt-1">
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button
          className="ml-2"
          variant="contained"
          color="primary"
          size="medium"
        >
          Medium
        </Button>
        <Button
          className="ml-2"
          variant="contained"
          color="primary"
          size="large"
        >
          Large
        </Button>
      </div>
      <div className="mt-2">
        <Button variant="outlined" color="primary" size="small">
          Small
        </Button>
        <Button
          className="ml-2"
          variant="outlined"
          color="primary"
          size="medium"
        >
          Medium
        </Button>
        <Button
          className="ml-2"
          variant="outlined"
          color="primary"
          size="large"
        >
          Large
        </Button>
      </div>
    </Card>
  );
};
ButtonVariationsStory.storyName = 'Button Variations';

export const LinkButtonVariationsStory = () => {
  return (
    <Router>
      <Card className="max-w-3xl p-6">
        <h1 className="text-2xl font-medium">Link Buttons</h1>

        <h2 className="text-xl mt-4">Contained Buttons</h2>
        <div className="mt-2">
          <LinkButton to="/home">Default</LinkButton>
          <LinkButton to="/home" className="ml-2" color="primary">
            Primary
          </LinkButton>
          <LinkButton to="/home" className="ml-2" color="secondary">
            Secondary
          </LinkButton>
        </div>

        <h2 className="text-xl mt-8">Outlined Buttons</h2>
        <div className="mt-2">
          <LinkButton to="/home" variant="outlined">
            Default
          </LinkButton>
          <LinkButton
            to="/home"
            className="ml-2"
            variant="outlined"
            color="primary"
          >
            Primary
          </LinkButton>
          <LinkButton
            to="/home"
            className="ml-2"
            variant="outlined"
            color="secondary"
          >
            Secondary
          </LinkButton>
        </div>

        <h2 className="text-xl mt-8">Sizes</h2>
        <div className="mt-2">
          <LinkButton
            to="/home"
            variant="contained"
            color="primary"
            size="small"
          >
            Small
          </LinkButton>
          <LinkButton
            to="/home"
            className="ml-2"
            variant="contained"
            color="primary"
            size="medium"
          >
            Medium
          </LinkButton>
          <LinkButton
            to="/home"
            className="ml-2"
            variant="contained"
            color="primary"
            size="large"
          >
            Large
          </LinkButton>
        </div>
        <div className="mt-6">
          <LinkButton
            to="/home"
            variant="outlined"
            color="primary"
            size="small"
          >
            Small
          </LinkButton>
          <LinkButton
            to="/home"
            className="ml-2"
            variant="outlined"
            color="primary"
            size="medium"
          >
            Medium
          </LinkButton>
          <LinkButton
            to="/home"
            className="ml-2"
            variant="outlined"
            color="primary"
            size="large"
          >
            Large
          </LinkButton>
        </div>
      </Card>
    </Router>
  );
};
LinkButtonVariationsStory.storyName = 'Link Button Variations';
