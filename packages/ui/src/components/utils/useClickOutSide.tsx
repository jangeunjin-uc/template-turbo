import { RefObject, useEffect } from 'react';

export interface UseClickOutSideProps {
  elRef: RefObject<HTMLElement>;
  onClickOutside: (ev: MouseEvent | TouchEvent) => void;
  exceptionEl?: RefObject<HTMLElement>;
}

export default function useClickOutSide({
  elRef,
  onClickOutside,
  exceptionEl,
}: UseClickOutSideProps) {
  const isOutSide = (e: MouseEvent | TouchEvent) => {
    if (exceptionEl?.current) {
      return (
        !!elRef.current &&
        !elRef.current.contains(e.target as HTMLElement) &&
        !exceptionEl.current.contains(e.target as HTMLElement)
      );
    }

    return !!elRef.current && !elRef.current.contains(e.target as HTMLElement);
  };

  const onMouseDown = (e: MouseEvent | TouchEvent) => {
    if (isOutSide(e) && onClickOutside) {
      onClickOutside(e);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('touchstart', onMouseDown);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('touchstart', onMouseDown);
    };
  }, [onClickOutside]);
}
