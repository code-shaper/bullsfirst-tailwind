import { Meta } from '@storybook/react';
import { SimpleHeader } from '../Header';
import {
  CenteredContainer,
  HorizontalContainer,
  ScrollingContainer,
  VerticalContainer,
  ViewCenteredContainer,
  ViewHorizontalContainer,
  ViewVerticalContainer,
} from './Containers';

export default {
  title: 'Components/Containers',
  component: HorizontalContainer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const CenteredContainerStory = () => {
  return (
    <ViewVerticalContainer>
      <SimpleHeader>Centered Container</SimpleHeader>
      <CenteredContainer className="bg-primary-50">
        <h1 className="text-2xl text-neutral-default">Centered Container</h1>
      </CenteredContainer>
    </ViewVerticalContainer>
  );
};
CenteredContainerStory.storyName = 'CenteredContainer';

export const HorizontalContainerStory = () => {
  return (
    <ViewVerticalContainer>
      <SimpleHeader>Horizontal Container</SimpleHeader>
      <HorizontalContainer>
        <VerticalContainer className="bg-primary-50 p-2">
          <h1 className="text-2xl text-neutral-default">Left</h1>
        </VerticalContainer>
        <VerticalContainer className="bg-secondary-default p-2">
          <h1 className="text-2xl text-neutral-default">Right</h1>
        </VerticalContainer>
      </HorizontalContainer>
    </ViewVerticalContainer>
  );
};
HorizontalContainerStory.storyName = 'HorizontalContainer';

export const VerticalContainerStory = () => {
  return (
    <ViewVerticalContainer>
      <SimpleHeader>Vertical Container</SimpleHeader>
      <VerticalContainer>
        <VerticalContainer className="bg-primary-50 p-2">
          <h1 className="text-2xl text-neutral-default">Top</h1>
        </VerticalContainer>
        <VerticalContainer className="bg-secondary-default p-2">
          <h1 className="text-2xl text-neutral-default">Bottom</h1>
        </VerticalContainer>
      </VerticalContainer>
    </ViewVerticalContainer>
  );
};
VerticalContainerStory.storyName = 'VerticalContainer';

export const ViewCenteredContainerStory = () => {
  return (
    <ViewCenteredContainer className="bg-primary-50">
      <h1 className="text-2xl text-neutral-default">View Centered Container</h1>
    </ViewCenteredContainer>
  );
};
ViewCenteredContainerStory.storyName = 'ViewCenteredContainer';

export const ViewHorizontalContainerStory = () => {
  return (
    <ViewHorizontalContainer>
      <VerticalContainer className="bg-primary-50 p-2">
        <h1 className="text-2xl text-neutral-default">Left</h1>
      </VerticalContainer>
      <VerticalContainer className="bg-secondary-default p-2">
        <h1 className="text-2xl text-neutral-default">Right</h1>
      </VerticalContainer>
    </ViewHorizontalContainer>
  );
};
ViewHorizontalContainerStory.storyName = 'ViewHorizontalContainer';

export const ViewVerticalContainerStory = () => {
  return (
    <ViewVerticalContainer>
      <VerticalContainer className="bg-primary-50 p-2">
        <h1 className="text-2xl text-neutral-default">Top</h1>
      </VerticalContainer>
      <VerticalContainer className="bg-secondary-default p-2">
        <h1 className="text-2xl text-neutral-default">Bottom</h1>
      </VerticalContainer>
    </ViewVerticalContainer>
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
    <ViewVerticalContainer>
      <SimpleHeader>Scrolling Container</SimpleHeader>
      <HorizontalContainer className="min-h-0">
        <ScrollingContainer className="w-80 bg-primary-50">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="bg-primary-default m-2 rounded"
              style={{ height: 60 }}
            />
          ))}
        </ScrollingContainer>
        <ScrollingContainer className="flex-1">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="bg-secondary-default m-2 rounded"
              style={{ height: 120 }}
            />
          ))}
        </ScrollingContainer>
      </HorizontalContainer>
    </ViewVerticalContainer>
  );
};
ScrollingContainerStory.storyName = 'ScrollingContainer';
