type TextIconProps = {
  icon: React.ReactNode;
  text: string;
};

export function TextIcon({ icon, text }: TextIconProps) {
  return (
    <div className="text-icon">
      {icon}
      {text}
    </div>
  );
}
