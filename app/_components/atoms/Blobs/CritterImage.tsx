import { BlobProps } from "./types";

export function CritterImageBlob({ className = "" }: BlobProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 359 373"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M87.2608 15.1203C14.5456 37.5018 -0.471872 140.855 1.10881 189.734C3.77336 243.012 9.08914 284.495 40.056 323.867C86.1838 369.539 135.537 375.838 226.18 370.326C298.694 365.917 333.923 308.48 342.473 280.314C361.584 230.627 359.287 174.843 355.167 143.848C349.648 102.329 327.826 53.864 303.431 34.4147C279.324 4.50844 178.155 -12.8565 87.2608 15.1203Z"
        fill="#F4EFD1"
        stroke="#8A7B60"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
    </svg>
  );
}
