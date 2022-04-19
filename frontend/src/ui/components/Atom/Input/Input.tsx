import {PropsWithClassName} from '@Framework/ui';
import React, { PropsWithChildren } from 'react';

import {Root} from './Input.styles';

interface Props extends PropsWithClassName {}

const Input: React.FC<Props> = (props: PropsWithChildren<Props>): React.ReactElement => {
  return (
    <Root className={props.className}  data-testid={"input-root"}>
      <input type="text" name="name" />
    </Root>
  );
}

export { Input }
