import { BlobProps } from "./types";

export function BlobSelectorBlob({ className = "" }: BlobProps) {
  return (
    <svg width="0" height="0" className={className}>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 25 -10"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>
  );
}
