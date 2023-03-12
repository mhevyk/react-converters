import { Button as BSButton } from 'react-bootstrap';
import { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: ButtonProps) {
  return (
    <BSButton variant="outline-primary" className="btn-custom" {...props}>
      {children}
    </BSButton>
  );
}

export default Button;
