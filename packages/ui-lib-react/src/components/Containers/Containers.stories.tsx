import { Meta } from '@storybook/react';
import { SimpleHeader } from '../Header';

export default {
  title: 'Components/Containers',
  component: SimpleHeader,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const CenteredContainerStory = () => {
  return (
    <div className="view-vertical-container">
      <SimpleHeader>Centered Container</SimpleHeader>
      <div className="centered-container bg-primary-50">
        <h1 className="text-2xl text-neutral-default">Centered Container</h1>
      </div>
    </div>
  );
};
CenteredContainerStory.storyName = 'CenteredContainer';

export const HorizontalContainerStory = () => {
  return (
    <div className="view-vertical-container">
      <SimpleHeader>Horizontal Container</SimpleHeader>
      <div className="horizontal-container">
        <div className="vertical-container bg-primary-50 p-2">
          <h1 className="text-2xl text-neutral-default">Left</h1>
        </div>
        <div className="vertical-container bg-secondary-default p-2">
          <h1 className="text-2xl text-neutral-default">Right</h1>
        </div>
      </div>
    </div>
  );
};
HorizontalContainerStory.storyName = 'HorizontalContainer';

export const VerticalContainerStory = () => {
  return (
    <div className="view-vertical-container">
      <SimpleHeader>Vertical Container</SimpleHeader>
      <div className="vertical-container">
        <div className="vertical-container bg-primary-50 p-2">
          <h1 className="text-2xl text-neutral-default">Top</h1>
        </div>
        <div className="vertical-container bg-secondary-default p-2">
          <h1 className="text-2xl text-neutral-default">Bottom</h1>
        </div>
      </div>
    </div>
  );
};
VerticalContainerStory.storyName = 'VerticalContainer';

export const ViewCenteredContainerStory = () => {
  return (
    <div className="view-centered-container bg-primary-50">
      <h1 className="text-2xl text-neutral-default">View Centered Container</h1>
    </div>
  );
};
ViewCenteredContainerStory.storyName = 'ViewCenteredContainer';

export const ViewHorizontalContainerStory = () => {
  return (
    <div className="view-horizontal-container">
      <div className="vertical-container bg-primary-50 p-2">
        <h1 className="text-2xl text-neutral-default">Left</h1>
      </div>
      <div className="vertical-container bg-secondary-default p-2">
        <h1 className="text-2xl text-neutral-default">Right</h1>
      </div>
    </div>
  );
};
ViewHorizontalContainerStory.storyName = 'ViewHorizontalContainer';

export const ViewVerticalContainerStory = () => {
  return (
    <div className="view-vertical-container">
      <div className="vertical-container bg-primary-50 p-2">
        <h1 className="text-2xl text-neutral-default">Top</h1>
      </div>
      <div className="vertical-container bg-secondary-default p-2">
        <h1 className="text-2xl text-neutral-default">Bottom</h1>
      </div>
    </div>
  );
};
ViewVerticalContainerStory.storyName = 'ViewVerticalContainer';

// For scrolling to work correctly, the scrolling container must set overflow
// to 'auto'. However, more importantly, the parent of the scrolling container
// should have min-height set to 0. Without this, scrolling with not work. See
// the two StackOverflow questions below:
// https://stackoverflow.com/questions/55896508/nested-scrolling-containers-using-flexbox
// https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
export const ScrollingContainerStory = () => {
  return (
    <div className="view-vertical-container">
      <SimpleHeader>Scrolling Container</SimpleHeader>
      <div className="horizontal-container min-h-0">
        <div className="scrolling-container w-80 bg-primary-50">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="bg-primary-default m-2 rounded"
              style={{ height: 60 }}
            />
          ))}
        </div>
        <div className="scrolling-container flex-1">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="bg-secondary-default m-2 rounded"
              style={{ height: 120 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
ScrollingContainerStory.storyName = 'ScrollingContainer';
