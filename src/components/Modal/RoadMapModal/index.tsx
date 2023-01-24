import React, { CSSProperties, FC, MouseEventHandler, useCallback } from 'react';

import { CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
  children: React.ReactNode;
}

const RoadMapModal: FC<Props> = ({ children, style, show, onCloseModal }) => {
  const stopPropagation = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {children}
      </div>
    </CreateMenu>
  );
};

export default RoadMapModal;
