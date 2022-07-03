import { Meta } from '@storybook/react';
import { Card } from './Card';

const imageUrl =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

export const CardStory = () => {
  return (
    <Card className="px-6 py-5 flex items-center space-x-3">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={imageUrl} alt="" />
      </div>
      <div className="flex-1 min-w-0">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">Jane Cooper</p>
          <p className="text-sm text-gray-500 truncate">Co-Founder / CEO</p>
        </a>
      </div>
    </Card>
  );
};
CardStory.storyName = 'Card';
