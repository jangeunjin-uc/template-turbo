import { useEffect } from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children: ReactNode;
  rootId: string;
  className?: string;
}

export default function Portal({ children, rootId, className = '' }: PortalProps) {
  let element: HTMLElement | null;
  let newRoot: HTMLElement | null;

  const [mount, setMount] = useState<HTMLElement>();

  useEffect(() => {
    if (rootId) {
      element = document.getElementById(rootId);
    }

    if (element) {
      setMount(element);
    } else {
      newRoot = document.createElement('div');
      newRoot.setAttribute('id', rootId);

      if (className) {
        newRoot.setAttribute('class', className);
      }

      document.body.appendChild(newRoot);
      setMount(newRoot);
    }

    return () => {
      if (newRoot) {
        newRoot.remove();
      }
    };
  }, [rootId]);

  return mount ? createPortal(children, mount) : null;
}
