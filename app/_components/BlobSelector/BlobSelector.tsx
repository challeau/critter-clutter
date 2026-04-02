import "./blobSelector.css";

type BlobSelectorProps = {
  children: React.ReactNode[];
  id: string;
};

export function BlobSelector({ children, id }: BlobSelectorProps) {
  const background = (
    <svg width="0" height="0">
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

  return (
    <>
      {background}
      <div className="blob-container" id={id}>
        <div className="goo-layer">
          {children.map((_child, index) => (
            <div key={index} className="goo-circle"></div>
          ))}
        </div>
        <div className="content-layer">{children}</div>
      </div>
    </>
  );
}
