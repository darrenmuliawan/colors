import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1440px]">{children}</div>
    </div>
  );
};
