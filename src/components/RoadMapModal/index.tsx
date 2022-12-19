import React, { CSSProperties, FC, useCallback } from 'react';
import { CreateMenu } from './styles';
import { useWindowSize } from '../../hooks/useWindowSize';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  style?: CSSProperties;
  children: React.ReactNode;
}

const RoadMapModal: FC<Props> = ({ children, style, show, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
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
