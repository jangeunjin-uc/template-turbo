declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGElement>>;
  const src: React.FC<React.SVGProps<SVGElement>>;
  export default src;
}

declare module 'obj-traverse';
