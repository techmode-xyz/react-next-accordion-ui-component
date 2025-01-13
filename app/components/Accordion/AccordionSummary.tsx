import { FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import s from './index.module.scss';
import { useBoolean } from '@/app/hooks/useBoolean';
// import utils
import cn from '@/app/utils/cn';

interface Props extends Omit<ComponentPropsWithoutRef<'details'>, 'children'> {
  children: (open: boolean) => ReactNode;
}

const AccordionSummary: FC<Props> = ({ 
  onClick,
  children,
  className, 
  open = false, 
  ...rest
}) => {
  const { state: isOpen, onToggle } = useBoolean(open);

  return (
    <details
      {...rest}
      open={open}
      className={cn(s.accordion__details, className)}
      onClick={(e) => {
        onToggle();
        onClick?.(e);
      }}
    >
      <summary>{children(isOpen)}</summary>
    </details>
  );
};

export default AccordionSummary;
