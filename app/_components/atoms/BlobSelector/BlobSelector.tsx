import "./blobSelector.css";

import { BlobSelectorBlob } from "../Blobs";

type BlobSelectorProps = {
  children: React.ReactNode[];
  id: string;
};

export function BlobSelector({ children, id }: BlobSelectorProps) {
  return (
    <>
      <BlobSelectorBlob />
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
