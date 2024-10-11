declare module 'react-swipeable-views' {
    import * as React from 'react';
  
    export interface SwipeableViewsProps {
      index?: number;
      onChangeIndex?: (index: number) => void;
      enableMouseEvents?: boolean;
      style?: React.CSSProperties;
      children?: React.ReactNode;
    }
  
    export default function SwipeableViews(props: SwipeableViewsProps): JSX.Element;
  }
  