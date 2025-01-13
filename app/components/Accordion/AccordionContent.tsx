import { FC, ComponentPropsWithoutRef } from 'react';
import s from './index.module.scss';
// import utils
import cn from '@/app/utils/cn';

type Props = ComponentPropsWithoutRef<'div'>;

const AccordionContent: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <div {...rest} className={cn(s.accordion__content, className)}>
      <div>{children}</div>
    </div>
  );
};

export default AccordionContent;
