import { Dispatch, SetStateAction } from "react";
import "./pageSelect.css";

type PageSelectProps = {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export function PageSelect({ page, totalPages, setPage }: PageSelectProps) {
  const pages: React.ReactNode[] = [];

  let i = 1;
  while (i <= totalPages) {
    const num = Math.min(i, totalPages);
    const className = "page-button" + (page === i ? " selected" : "");

    pages.push(<div className={className} onClick={() => setPage(num)}></div>);

    i++;
  }
  return (
    <div className="light-blue" id="page-select">
      {...pages}
    </div>
  );
}
