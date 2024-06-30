import { Typography } from "@mui/material";
import DataGrid from "react-data-grid";
import { useMemo, useState } from "react";
import createRows, {
  SummaryRow,
} from "../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/row";

import { Row } from "../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/interface_row";
import "./index.css";
import textEditor from "../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/TextEditor";
import { Column } from "../../ComponentOfDataGird/types";

export default function ExColumnCss() {
  return (
    <>
      <Typography>ExColumnCss</Typography>
      임포트 해주기 import './index.css';
      <br />
      <pre>
        {`.index_css클래스이름 {
           background-color: blue;
           width: 500px;
           height: 500px;
           border: 1px solid red;
           text-align: end;
         }`}
      </pre>
      <hr />
      <Typography>DataGrid 최상위에 넣기</Typography>
      <pre>
        {`<DataGrid className={'index_css클래스이름'} ...... ></DataGrid>`}
        <MyPage className={"index_css클래스이름"} />
      </pre>
      <hr />
      <Typography>각 컬럼 css 설정 (datagird에는 css 적용 안함) </Typography>
      <pre>
        {`
      {
        key: 'client',
        name: 'Add Css!',
        headerCellClass: headerCellClass, // 
        summaryCellClass: summaryCellClass,
        cellClass: cellClass,
      },
        `}
      </pre>
      <MyPage
        headerCellClass={"headerCellClass"}
        summaryCellClass={"summaryCellClass"}
        cellClass={"cellClass"}
      />
      <br />
      <Typography>각각 적용함 </Typography>
      <pre>
        {`      
          .headerCellClass{ // 컬럼부분
            background-color: aqua;
          }

          .summaryCellClass{ //중간부분
            background-color: gold;
          }
          
          .cellClass{ //row부분
            background-color: blue;
          }
        `}
      </pre>
    </>
  );
}

interface typeOfClassName {
  className?: string;
  headerCellClass?: string;
  summaryCellClass?: string;
  cellClass?: string;
}

function MyPage({
  className,
  headerCellClass,
  summaryCellClass,
  cellClass,
}: typeOfClassName) {
  const [rows, setRows] = useState(createRows({ index: 5 }));
  const columns2 = useMemo(() => MyColumns, [MyColumns]);
  const summaryRows = useMemo((): readonly SummaryRow[] => {
    return [
      {
        id: "total_0",
        totalCount: rows.length,
        yesCount: rows.filter((r) => r.available).length,
      },
    ];
  }, [rows]);

  return (
    <>
      <DataGrid
        className={className}
        columns={columns2({
          headerCellClass: headerCellClass,
          summaryCellClass: summaryCellClass,
          cellClass: cellClass,
        })}
        rows={rows}
        topSummaryRows={summaryRows}
        bottomSummaryRows={summaryRows}
      ></DataGrid>
    </>
  );
}

function MyColumns({
  headerCellClass,
  summaryCellClass,
  cellClass,
}: typeOfClassName): readonly Column<Row, SummaryRow>[] {
  return [
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
      name: "Add Css!",
      headerCellClass: headerCellClass,
      summaryCellClass: summaryCellClass,
      cellClass: cellClass,
    },
  ];
}
