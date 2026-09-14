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
  // Increased height further to make the logo stand out more prominently
  const iconDimensions = {
    sm: 'h-12', // previously 10
    md: 'h-16', // previously 12 (64px height)
    lg: 'h-20', // previously 16
    xl: 'h-24', // previously 20
  }[size];

  const textSize = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  }[size];

  const filterClass = variant === 'white' ? 'brightness-0 invert' : '';

  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <img 
        src="https://cwamdjbtllwqjkklizvh.supabase.co/storage/v1/object/public/Younity%20Portofolio/Logo%20Younity%20Submark%202.png" 
        alt="YouNity Group Logo" 
        className={`${iconDimensions} w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-105 ${filterClass}`}
        referrerPolicy="no-referrer"
      />
      
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className={`font-bold tracking-tight ${textSize} font-['Outfit']`}>
            <span className={variant === 'white' ? 'text-white' : 'text-[#0066FF]'}>
              You
            </span>
            <span className={variant === 'white' ? 'text-white' : 'text-slate-900 dark:text-white'}>
              Nity
            </span>
            <span className="text-[#F59E0B] font-black">.</span>
            <span className={variant === 'white' ? 'text-blue-100 font-light' : 'text-slate-500 dark:text-slate-400 font-medium text-[0.85em] ml-0.5'}>
              Group
            </span>
          </div>
          <span className={`text-[9px] tracking-widest uppercase font-semibold mt-0.5 ${
            variant === 'white' ? 'text-blue-200' : 'text-slate-400 dark:text-slate-500'
          }`}>
            One Step Event Solutions
          </span>
        </div>
      )}
    </div>
  );
}
