import { Typography } from '@mui/material';
import DataGrid from 'react-data-grid';
import { useMemo, useState } from 'react';
import MygetColumns3 from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/Columns';
import createRows, {
  getComparator,
} from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/row';
import { SortColumn } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird';
import { Row } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/interface_row';

export default function ExRowsChange() {
  return (
    <>
      <Typography>ExRowsChange</Typography>
      <pre>
        해당 그리드 안에 <br />
        {`<DataGrid           
        columns={columns2}
        rows={sortedRows}        
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        onRowsChange={setRows}

        온 셀렉트 체인지 이거 안넣어도 되는데 
        아마도 set 함수에 넣고 다시 실행할때 나오는것 같음
      ></DataGrid>`}
        <br />
      </pre>

      <pre>
        해당 컬럼 안에 <br />
        {`   {
      key: 'client',
      name: 'Client',
      width: 'max-content',
      draggable: true,
      renderEditCell: textEditor,
      텍스트 에디터 넣어주어야지 수정이 가능함
    },`}
        <br />
      </pre>

      <MySort />
    </>
  );
}

function MySort() {
  const [rows, setRows] = useState(createRows({ index: 5 }));
  const columns2 = useMemo(() => MygetColumns3, [MygetColumns3]);
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
          height: '100%',
          margin: '0',
          padding: '0',
          width:"1000px"
        }}
        defaultColumnOptions={{
          sortable: true,
          resizable: true,
        }}
        columns={columns2()}
        rows={sortedRows}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        onRowsChange={setRows}
      ></DataGrid>
    </>
  );
}
