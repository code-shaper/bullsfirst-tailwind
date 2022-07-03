import { CenteredContainer } from '../Containers';
import { DivProps } from '../ReactProps';

export function CenteredMessage({ children, ...props }: DivProps) {
  return (
    <CenteredContainer className="p-6" {...props}>
      <h1 className="text-2xl text-neutral-default">{children}</h1>
    </CenteredContainer>
  );
}
