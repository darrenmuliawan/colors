import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  id?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, id = '' } = props;

  return (
    <div id={id} className="flex items-center justify-center">
      <div className="max-w-[1440px] w-full">{children}</div>
    </div>
  );
};
