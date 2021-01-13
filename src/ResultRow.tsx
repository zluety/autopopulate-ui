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
      <span className="key">{key}</span>
      <span className="company_id">{company_id}</span>
      <span className="statement_date">{statement_date}</span>
    </div>
  );
}