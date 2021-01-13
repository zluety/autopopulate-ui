import { FunctionComponent } from "react";
import "./ResultRow.css";

interface Props {
  key: number,
  company_id: number,
  statement_date: string,
}

export const ResultRow: FunctionComponent<Props> = ({ key, company_id, statement_date }: Props) => {
  return (
    <div>
      <span className="component-emoji-result-row copy-to-clipboard">{key}</span>
      <span className="title">{company_id}</span>
      <span className="info">{statement_date}</span>
    </div>
  );
}