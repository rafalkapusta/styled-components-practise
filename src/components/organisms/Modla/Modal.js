import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

  const parent = document.body;
  const el = document.createElement('div');

export default function Modal({children, user}) {

  useEffect(() => {
    parent.appendChild(el);
    return () => {
      parent.removeChild(el);
    };
  }, [parent, el]);

  return createPortal(<><p>{user}</p><button>Close</button></>, el);
}