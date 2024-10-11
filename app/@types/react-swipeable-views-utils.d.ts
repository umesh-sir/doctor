declare module 'react-swipeable-views-utils' {
    import SwipeableViews from 'react-swipeable-views';
  
    export const autoPlay: (Component: typeof SwipeableViews) => typeof SwipeableViews;
  }
  