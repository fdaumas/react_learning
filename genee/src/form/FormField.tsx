import { ReactNode } from 'react';

export type Props = {
  children: ReactNode;
};

function FormField({ children }: Props) {
  return <div>{children}</div>;
}

export default FormField;
