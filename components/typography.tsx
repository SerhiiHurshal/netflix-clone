type Props = {
  children: React.ReactNode;
  className?: string;
};

export const H2Regular = ({ children, className }: Props) => (
  <h2 className={`text-[1.4vw] leading-[1.25vw] text-slate-200 ${className}`}>
    {children}
  </h2>
);

export const H2Bold = ({ children, className }: Props) => (
  <h2
    className={`text-[1.4vw] leading-[1.25vw] text-slate-200 font-medium ${className}`}
  >
    {children}
  </h2>
);

export const LabelRegular = ({ children, className }: Props) => (
  <p className={`text-sm text-slate-200 ${className}`}>{children}</p>
);

export const LabelBold = ({ children, className }: Props) => (
  <p className={`text-sm text-slate-200 font-medium ${className}`}>
    {children}
  </p>
);
