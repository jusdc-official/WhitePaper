import React, { forwardRef } from 'react';
import type { ReactNode } from 'react';

interface ContentSectionProps {
  id: string;
  children: ReactNode;
}

const ContentSection = forwardRef<HTMLElement, ContentSectionProps>(
  ({ id, children }, ref) => {
    return (
      <section id={id} ref={ref} className="py-12 first:pt-0 last:pb-0">
        {children}
      </section>
    );
  }
);

ContentSection.displayName = 'ContentSection';

export default ContentSection;