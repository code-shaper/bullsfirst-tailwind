import { ViewCenteredContainer } from '../Containers';
import { DivProps } from '../ReactProps';

export function ViewCenteredMessage({ children, ...props }: DivProps) {
  return (
    <ViewCenteredContainer className="p-6" {...props}>
      <h1 className="text-2xl text-neutral-default">{children}</h1>
    </ViewCenteredContainer>
  );
}
