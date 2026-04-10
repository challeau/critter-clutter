import { BlobProps } from "./types";

export function TimeLapseBlob({ className = "" }: BlobProps) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 228 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M55.091 5.67097C8.65095 14.6597 -0.940019 56.1682 0.0694949 75.7989C1.77122 97.1961 5.16617 113.857 24.9433 129.669C54.4031 148.012 85.923 150.542 143.812 148.328C190.124 146.557 212.623 123.489 218.083 112.177C230.289 92.2222 228.822 69.8185 226.191 57.3702C222.666 40.6954 208.729 21.2311 193.149 13.4199C177.753 1.40905 113.141 -5.565 55.091 5.67097Z"
        fill="#A38D43"
        fillOpacity="0.27"
      />
    </svg>
  );
}
