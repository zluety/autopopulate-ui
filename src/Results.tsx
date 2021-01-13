import { FunctionComponent } from "react";
import { ResultRow } from "./ResultRow";
import "./Results.css";

interface ResultProps {
  id: number,
  process_date: string,
  institution_name: string,
  statement_date: string,
  company_id: number,
  company_name: string,
}

interface Props {
  data: ResultProps[]
}

export const Results: FunctionComponent<Props> = ({ data }: Props) => {
  return (
    <div className="component-emoji-results">
      {data.map(result => (
        <ResultRow
          key={result.id}
          company_id={result.company_id}
          statement_date={result.statement_date}
        />
      ))}
    </div>
  );
}