export type ConstantsType<T> = T[keyof T];

export const SIZE_TYPE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full',
};

export type SizeType = ConstantsType<typeof SIZE_TYPE>;
