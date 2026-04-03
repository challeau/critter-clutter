type TextIconProps = {
  icon: React.ReactNode;
  text: string;
};

export function TextIcon({ icon, text }: TextIconProps) {
  return (
    <div className="flex-container-row" style={{ gap: "0.5em" }}>
      {icon}
      {text}
    </div>
  );
}
