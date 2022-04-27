import { animateScroll as scroll } from 'react-scroll';

export const scrollDownPages = () => {
  scroll.scrollToBottom({
    duration: 2000,
    smooth: true,
  });
};