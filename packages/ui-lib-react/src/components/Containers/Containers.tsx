import clsx from 'clsx';
import { DivProps } from '../ReactProps';

/**
 * HorizontalContainer
 * - flex: 1
 * - flexDirection: row
 */
export function HorizontalContainer({
  className,
  children,
  ...props
}: DivProps) {
  return (
    <div className={clsx(className, 'flex-1 flex flex-row')} {...props}>
      {children}
    </div>
  );
}

/**
 * ViewHorizontalContainer
 * - height: 100vh
 * - flexDirection: row
 */
export function ViewHorizontalContainer({
  className,
  children,
  ...props
}: DivProps) {
  return (
    <div className={clsx(className, 'h-screen flex flex-row')} {...props}>
      {children}
    </div>
  );
}

/**
 * VerticalContainer
 * - flex: 1
 * - flexDirection: column
 */
export function VerticalContainer({ className, children, ...props }: DivProps) {
  return (
    <div className={clsx(className, 'flex-1 flex flex-col')} {...props}>
      {children}
    </div>
  );
}

/**
 * ViewVerticalContainer
 * - height: 100vh
 * - flexDirection: column
 */
export function ViewVerticalContainer({
  className,
  children,
  ...props
}: DivProps) {
  return (
    <div className={clsx(className, 'h-screen flex flex-col')} {...props}>
      {children}
    </div>
  );
}

/**
 * CenteredContainer
 * - Centers content inside a flex container
 * - flex: 1
 */
export function CenteredContainer({ className, children, ...props }: DivProps) {
  return (
    <div
      className={clsx(
        className,
        'flex-1 flex justify-center items-center text-center'
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ViewCenteredContainer
 * - Centers content in the entire view
 * - height: 100vh
 */
export function ViewCenteredContainer({
  className,
  children,
  ...props
}: DivProps) {
  return (
    <div
      className={clsx(
        className,
        'h-screen flex justify-center items-center text-center'
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ScrollingContainer
 * - overflow: 'auto'
 */
export function ScrollingContainer({
  className,
  children,
  ...props
}: DivProps) {
  return (
    <div className={clsx(className, 'overflow-auto')} {...props}>
      {children}
    </div>
  );
}
