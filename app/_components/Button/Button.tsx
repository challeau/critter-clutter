import "./button.css";

export enum ButtonType {
  Solid = "solid",
  Hoverable = "hoverable",
  Date = "date",
  Time = "time",
}

export enum ButtonColor {
  Beige = "beige",
  Green = "green",
  LightBlue = "light-blue",
  DarkBlue = "dark-blue",
  White = "white",
  TransparentWhite = "tspt-white",
}

type ButtonProps = {
  color: ButtonColor;
  icon: React.ReactNode;
  id: string;
  onClick: () => void;
  text: string;
  type?: ButtonType;
};

export function Button(props: ButtonProps) {
  const { color, icon, id, onClick, text, type = ButtonType.Solid } = props;
  const className = `flex-container-row button ${color} ${type}`;

  const background = (
    <svg
      className="button-bg"
      width="340"
      height="88"
      viewBox="0 0 340 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M264.716 3.3493C338.186 8.6581 339.849 41 339.85 43C339.85 45 343.7 67.2442 312.411 76.5831C265.805 87.4162 215.939 88.9104 124.355 87.603C51.0886 86.557 22.8076 75.1811 14.1688 68.5C-5.14099 56.7145 -0.449097 37.352 3.71353 30C9.28943 20.1518 21.6545 12.5392 46.3028 7.92585C70.6597 0.832191 172.879 -3.28671 264.716 3.3493Z"
        fill="#F3F8E6"
        fillOpacity="1"
      />
    </svg>
  );

  return (
    <div className={className} id={id} onClick={onClick}>
      {background}
      {icon}
      <span className="button-text">{text}</span>
    </div>
  );
}
