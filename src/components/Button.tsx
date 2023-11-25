interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

export const Button = ({ children, primary }: ButtonProps) => {
  return (
    <div
      className={`flex justify-center min-w-[116px] px-6 py-4 rounded-lg hover:cursor-pointer hover:brightness-95 ${
        primary ? "text-white bg-orange-400" : "bg-white"
      }`}
    >
      {children}
    </div>
  );
};
