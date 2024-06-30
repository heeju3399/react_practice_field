import { type Column } from "./types";
import textEditor from "../../../Adata_grid_my_guide/contents/ComponentOfDataGird/TextEditor";

const dateFormatter = new Intl.DateTimeFormat(navigator.language);
const currencyFormatter = new Intl.NumberFormat(navigator.language, {
  style: "currency",
  currency: "eur",
});

interface SummaryRow {
  id: string;
  totalCount: number;
  yesCount: number;
}

interface Row {
  id: number;
  title: string;
  client: string;
  area: string;
  country: string;
  contact: string;
  assignee: string;
  progress: number;
  startTimestamp: number;
  endTimestamp: number;
  budget: number;
  transaction: string;
  account: string;
  version: string;
  available: boolean;
}

export const dialogContainerClassname = `
position: absolute;
inset: 0;
display: flex;
place-items: center;
background: rgba(0, 0, 0, 0.1);

> dialog {
  width: 300px;
  > input {
    width: 100%;
  }

  > menu {
    text-align: end;
  }
}
`;

export default function MygetColumns3(): readonly Column<Row, SummaryRow>[] {
  return [
    //SelectColumn,
    {
      key: "id",
      name: "ID",
      frozen: true,
      resizable: false,

      renderSummaryCell() {
        return <strong>Total</strong>;
      },
    },
    {
      key: "title",
      name: "Task",
      frozen: true,
      renderEditCell: textEditor,
      renderSummaryCell({ row }) {
        return `${row.totalCount} records`;
      },
    },
    {
      key: "client",
      name: "Client",
      width: "max-content",
      draggable: true,
      renderEditCell: textEditor,
    },
    {
      key: "area",
      name: "Area",
      renderEditCell: textEditor,
    },

    {
      key: "contact",
      name: "Contact",
      renderEditCell: textEditor,
    },
    {
      key: "assignee",
      name: "Assignee",
      renderEditCell: textEditor,
    },
    {
      key: "progress",
      name: "Completion",
      renderCell(props) {
        const value = props.row.progress;
        return (
          <>
            <progress max={100} value={value} style={{ inlineSize: 50 }} />{" "}
            {Math.round(value)}%
          </>
        );
      },
    },
    {
      key: "startTimestamp",
      name: "Start date",
      renderCell(props) {
        return dateFormatter.format(props.row.startTimestamp);
      },
    },
    {
      key: "endTimestamp",
      name: "Deadline",
      renderCell(props) {
        return dateFormatter.format(props.row.endTimestamp);
      },
    },
    {
      key: "budget",
      name: "Budget",
      renderCell(props) {
        return currencyFormatter.format(props.row.budget);
      },
    },
    {
      key: "transaction",
      name: "Transaction type",
    },
    {
      key: "account",
      name: "Account",
    },
    {
      key: "version",
      name: "Version",
      renderEditCell: textEditor,
    },
    {
      key: "available",
      name: "Available",
      // renderCell({ row, onRowChange, tabIndex }) {
      //   return (
      //     <>안됨</>
      //     //안되 <SelectCellFormatter99
      //     //   value={row.available}
      //     //   onChange={() => {
      //     //     onRowChange({ ...row, available: !row.available });
      //     //   }}
      //     //   tabIndex={tabIndex}
      //     // />
      //   );
      // },
      renderSummaryCell({ row: { yesCount, totalCount } }) {
        return `${Math.floor((100 * yesCount) / totalCount)}% ✔️`;
      },
    },
  ];
}
