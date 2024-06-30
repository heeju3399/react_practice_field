import { Typography } from '@mui/material';
import DataGrid from 'react-data-grid';
import { useMemo, useState } from 'react';
import createRows, {
  SummaryRow,
  getComparator,
} from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/row';

import { SortColumn } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird';
import { Row } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/interface_row';
import MygetColumns3 from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/Columns';

export default function ExSummaryRowsIndex() {
  return (
    <>
      <Typography>ExSummaryRowsIndex</Typography>
      <pre>
        해당 그리드 안에 <br />
        {`<DataGrid        
        
        topSummaryRows={summaryRows}
        bottomSummaryRows={summaryRows}
      ></DataGrid>`}
        <br />위 아래에 넣어짐
      </pre>
      <MySort />
    </>
  );
}

function MySort() {
  const [rows, setRows] = useState(createRows({ index: 5 }));
  const columns = useMemo(() => MygetColumns3, [MygetColumns3]);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);

  const summaryRows = useMemo((): readonly SummaryRow[] => {
    return [
      {
        id: 'total_0',
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
          return sort.direction === 'ASC' ? compResult : -compResult;
        }
      }
      return 0;
    });
  }, [rows, sortColumns]);

  return (
    <>
      <DataGrid
        style={{
          border: '5px solid blue',
          wordBreak: 'break-all',
          height: '300px',
          margin: '0',
          padding: '0',
        }}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
        columns={columns()}
        rows={sortedRows}
        topSummaryRows={summaryRows}
        bottomSummaryRows={summaryRows}
      ></DataGrid>
    </>
  );
}
