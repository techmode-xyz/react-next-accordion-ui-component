import { FC, ComponentPropsWithoutRef } from 'react';
import s from './index.module.scss';
// import components
import AccordionSummary from './AccordionSummary';
import AccordionContent from './AccordionContent';
// import utils
import cn from '@/app/utils/cn';

type Props = ComponentPropsWithoutRef<'article'>;

const AccordionComponent: FC<Props> = ({ className, children, ...rest }) => {
  return (
    <article {...rest} className={cn(s.accordion, className)}>
      {children}
    </article>
  );
};

const Accordion = Object.assign(AccordionComponent, {
  Summary: AccordionSummary,
  Content: AccordionContent,
});

export default Accordion;
