import { useEffect, useState } from 'react';

/** 
This hook is measuring window size. We're using it to display either mobile or desktop menu
**/

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };

    // Set size at the first client-side load
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
