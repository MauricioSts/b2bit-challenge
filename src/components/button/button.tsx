import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  full?: boolean;
  className?: string;
}

export const Button = ({ text, full, ...rest }: ButtonProps) => {
  return (
    <button
      className={
        'font-bold bg-b2b-primary rounded-lg text-white p-3' +
        (full ? ' w-full' : '')
      }
      {...rest}
    >
      {text}
    </button>
  );
};
