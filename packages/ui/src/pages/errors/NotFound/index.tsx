import { SmileySad, CaretRight } from '@phosphor-icons/react';
import { ReactNode } from 'react';

interface NotFoundProps {
  link?: string;
  linkText?: string;
  children?: ReactNode;
}
export default function NotFound({
  children = undefined,
  link = undefined,
  linkText = undefined,
}: NotFoundProps) {
  return (
    <div className="notfound-container">
      <SmileySad className="notfound--emoji" />
      <strong className="notfound--title">페이지를 찾을 수 없습니다.</strong>
      {link && (
        <a href={link} className="notfound--link">
          <strong>{linkText}</strong>
          <CaretRight />
        </a>
      )}
      {children}
    </div>
  );
}
