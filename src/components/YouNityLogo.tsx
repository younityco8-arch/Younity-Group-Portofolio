interface YouNityLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'color' | 'white' | 'dark';
}

export function YouNityLogo({
  className = '',
  size = 'md',
  showText = true,
  variant = 'color',
}: YouNityLogoProps) {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  const primaryColor = variant === 'white' ? '#FFFFFF' : '#0066FF';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Official YouNity Submark Logo */}
      <svg
        viewBox="0 0 100 100"
        className={`${iconDimensions} flex-shrink-0 transition-transform duration-300 hover:scale-105`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo YouNity Submark"
      >
        <g fill={primaryColor}>
          {/* Center Ray */}
          <rect x="47.4" y="18" width="5.2" height="14" rx="2.6" />
          {/* Left Ray (tilted 43 degrees outwards) */}
          <rect
            x="47.4"
            y="18"
            width="5.2"
            height="14"
            rx="2.6"
            transform="rotate(-43 50 46)"
          />
          {/* Right Ray (tilted 43 degrees outwards) */}
          <rect
            x="47.4"
            y="18"
            width="5.2"
            height="14"
            rx="2.6"
            transform="rotate(43 50 46)"
          />
          {/* Central Head Dot */}
          <circle cx="50" cy="46" r="8" />
          {/* Solid U Embrace Submark Body */}
          <path d="M 28 46 L 34 46 A 2.5 2.5 0 0 1 36.5 48.5 L 36.5 50 A 13.5 13.5 0 0 0 63.5 50 L 63.5 48.5 A 2.5 2.5 0 0 1 66 46 L 72 46 A 2.5 2.5 0 0 1 74.5 48.5 L 74.5 50 A 24.5 24.5 0 0 1 25.5 50 L 25.5 48.5 A 2.5 2.5 0 0 1 28 46 Z" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-bold tracking-tight ${textSize} font-['Outfit']`}>
            <span className={variant === 'white' ? 'text-white' : 'text-[#0066FF]'}>
              You
            </span>
            <span className={variant === 'white' ? 'text-white' : 'text-slate-900'}>
              Nity
            </span>
            <span className="text-[#F59E0B] font-black">.</span>
            <span className={variant === 'white' ? 'text-blue-100 font-light' : 'text-slate-500 font-medium text-[0.85em] ml-0.5'}>
              Group
            </span>
          </div>
          <span className={`text-[9px] tracking-widest uppercase font-semibold mt-0.5 ${
            variant === 'white' ? 'text-blue-200' : 'text-slate-400'
          }`}>
            One Step Event Solutions
          </span>
        </div>
      )}
    </div>
  );
}
