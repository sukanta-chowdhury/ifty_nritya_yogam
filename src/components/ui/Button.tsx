import React from 'react';

type Variant = 'primary' | 'outline' | 'brown';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  as?: 'button' | 'a';
  href?: string;
  fullWidth?: boolean;
};

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-white hover:bg-goldDark shadow-warm hover:-translate-y-0.5',
  outline:
    'border-2 border-gold text-gold hover:bg-gold hover:text-white',
  brown:
    'bg-brown text-warmWhite hover:bg-goldDark shadow-warm hover:-translate-y-0.5',
};

export default function Button({
  variant = 'primary',
  as = 'button',
  href,
  fullWidth,
  className = '',
  children,
  ...rest
}: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-medium transition-all duration-300 ${
    variants[variant]
  } ${fullWidth ? 'w-full' : ''} ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
