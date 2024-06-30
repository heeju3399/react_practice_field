import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import "./basicDemoMainPage.css";
import DataGrid from "react-data-grid";
import createRows, {
  getComparator,
} from "../Adata_grid_my_guide/contents/ComponentOfDataGird/row";
import {
  Column,
  Direction,
  Props,
  SortColumn,
} from "../Adata_grid_my_guide/contents/ComponentOfDataGird/types";
import textEditor, {
  textEditorClassname,
} from "../Adata_grid_my_guide/contents/ComponentOfDataGird/TextEditor";

const toolbarClassname = "toolbarClassnameOfbasicDemoMainPage";
const dialogContainerClassname = "dialogContainerClassnameOfbasicDemoMainPage";

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

function getColumns(
  countries: readonly string[],
  direction: Direction
): readonly Column<Row, SummaryRow>[] {
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
      key: "country",
      name: "Country",
      renderEditCell: (p) => (
        <select
          autoFocus
          className={textEditorClassname}
          value={p.row.country}
          onChange={(e) =>
            p.onRowChange({ ...p.row, country: e.target.value }, true)
          }
        >
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      ),
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
      renderEditCell({ row, onRowChange, onClose }) {
        return createPortal(
          <div
            dir={direction}
            className={"css" + dialogContainerClassname}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                onClose();
              }
            }}
          >
            <dialog open>
              <input
                autoFocus
                type="range"
                min="0"
                max="100"
                value={row.progress}
                onChange={(e) =>
                  onRowChange({ ...row, progress: e.target.valueAsNumber })
                }
              />
              <menu>
                <button type="button" onClick={() => onClose()}>
                  Cancel
                </button>
                <button type="button" onClick={() => onClose(true)}>
                  Save
                </button>
              </menu>
            </dialog>
          </div>,
          document.body
        );
      },
      editorOptions: {
        displayCellContent: true,
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

export default function BasicDemoCommonFeatures({ direction }: Props) {
  const [rows, setRows] = useState(createRows({ index: 100 }));
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  );

  const countries = useMemo((): readonly string[] => {
    return [...new Set(rows.map((r) => r.country))].sort(
      new Intl.Collator().compare
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const columns = useMemo(
    () => getColumns(countries, direction),
    [countries, direction]
  );

  const summaryRows = useMemo((): readonly SummaryRow[] => {
    return [
      {
        id: "total_0",
        totalCount: rows.length,
        yesCount: rows.filter((r) => r.available).length,
      },
    ];
  }, [rows]);

  const sortedRows = useMemo((): readonly Row[] => {
    if (sortColumns.length === 0) return rows;

    return [...rows].sort((a, b) => {
      for (const sort of sortColumns) {
        const comparator = getComparator(sort.columnKey);
        const compResult = comparator(a, b);
        if (compResult !== 0) {
          return sort.direction === "ASC" ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [rows, sortColumns]);

  const gridElement = (
    <DataGrid
      rowKeyGetter={rowKeyGetter}
      columns={columns}
      rows={sortedRows}
      defaultColumnOptions={{
        sortable: true,
        resizable: true,
      }}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      onRowsChange={setRows}
      sortColumns={sortColumns}
      onSortColumnsChange={setSortColumns}
      topSummaryRows={summaryRows}
      bottomSummaryRows={summaryRows}
      className="fill-grid-basic-demo-main-page"
      direction={direction}
    />
  );

  return (
    <>
      <div className={toolbarClassname}>
        <ExportButton onExport={() => alert("oksk1")}>
          Export to CSV
        </ExportButton>
        <ExportButton onExport={() => alert("oksk2")}>
          Export to PDF
        </ExportButton>
      </div>
      {gridElement}
    </>
  );
}

function ExportButton({
  onExport,
  children,
}: {
  onExport: () => void;
  children: React.ReactChild;
}) {
  const [exporting, setExporting] = useState(false);
  return (
    <button
      type="button"
      disabled={exporting}
      onClick={async () => {
        setExporting(true);
        await onExport();
        setExporting(false);
      }}
    >
      {exporting ? "Exporting" : children}
    </button>
  );
}

function rowKeyGetter(row: Row) {
  return row.id;
}
