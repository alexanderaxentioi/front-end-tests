import { PropsWithClassName } from '@Framework/ui';
import React, { PropsWithChildren } from 'react';

import { Root } from './Test.styles';

type Props = PropsWithClassName;

const Test: React.FC<Props> = (
  props: PropsWithChildren<Props>
): React.ReactElement => {
  return (
    <Root className={props.className} data-testid={'test-root'}>
      Test
    </Root>
  );
};

export { Test };
