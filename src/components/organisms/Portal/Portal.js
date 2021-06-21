import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children }) => {
  const parent = document.body;
  const el = document.createElement('div');

  useEffect(() => {
    parent.appendChild(el);
    return () => {
      parent.removeChild(el);
    };
  }, [parent, el]);

  return createPortal(children, el);
};
