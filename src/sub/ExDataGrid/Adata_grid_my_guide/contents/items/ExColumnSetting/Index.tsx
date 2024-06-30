import { Typography } from "@mui/material";
import DataGrid, { SelectColumn } from "react-data-grid";
import { useMemo, useState } from "react";
import createRows, {
  getComparator,
} from "../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/row";
import { SortColumn } from "../../../../Adata_grid_my_guide/contents/ComponentOfDataGird";
import { Row } from "../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/interface_row";

export default function ExColumnSetting() {
  return (
    <>
      <Typography>ExColumnSetting</Typography>

      <pre>
        해당 컬럼 안에 <br />
        {`
        {
          key: 'id',
          name: 'ID',
          frozen: true, // 맨앞으로 오게 하기 + 스크롤해도 그대로 나오게! #기본값 false
          draggable: true, // 드래그 할수있기 없기 #기본값 false
          resizable: true, // 셀과 셀 사이 사이즈 줄이거나 펴거나 #기본값 true
          renderSummaryCell() { // 다른 거 넣을때
            return <strong>Total</strong>;
          },     
          },       
       
        `}
        <br />
      </pre>

      <MyPage />
    </>
  );
}

function MyPage() {
  const myGetcolumns = [
    {
      ...SelectColumn,
      headerCellClass: "selectCellClassname993",
      cellClass: "selectCellClassname993",
    },
    {
      key: "id",
      name: "ID",
      draggable: true,
      frozen: true,
      resizable: true,
      renderSummaryCell() {
        return <strong>Total</strong>;
      },
    },
    {
      key: "title",
      name: "Task",
      draggable: true,
      renderSummaryCell({ row }) {
        return `${row.totalCount} records`;
      },
    },
    {
      key: "client",
      name: "Client",
      width: "max-content",
    },
    {
      key: "client1",
      name: "Client1",
      width: "max-content",
    },
    {
      key: "client2",
      name: "Client2",
      width: "max-content",
    },
  ];

  const [rows, setRows] = useState(createRows({ index: 5 }));
  const columns2 = useMemo(() => myGetcolumns, [myGetcolumns]);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  );
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

  return (
    <>
      <DataGrid
        style={{
          border: "5px solid blue",
          wordBreak: "break-all",
          height: "300px",
          margin: "0",
          padding: "0",
        }}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
        columns={columns2}
        rows={sortedRows}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        onRowsChange={setRows}
      ></DataGrid>
    </>
  );
}
