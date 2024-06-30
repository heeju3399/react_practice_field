import { Typography } from '@mui/material';
import DataGrid from 'react-data-grid';
import { useMemo, useState } from 'react';
import createRows from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/row';

export default function ExDarkMode() {
  return (
    <>
      <Typography>ExDarkMode</Typography>
      <pre>ExDarkMode</pre>
      다크모드는 시스템에서? 하는거 같음
      <br />
      <MyPage />
      <br />
      <TestPage />
    </>
  );
}

function TestPage() {
  const testccc = [
    {
      key: 'client',
      name: 'Client',
      width: 'max-content',
    },
  ];

  const testrrr = [
    {
      name: 'aa112',
    },
  ];

  return (
    <>
      <DataGrid columns={testccc} rows={testrrr}></DataGrid>
    </>
  );
}

function MyPage() {
  const myGetcolumns = [
    {
      key: 'id',
      name: 'ID',
      draggable: true,
      resizable: true,
      renderSummaryCell() {
        return <strong>Total</strong>;
      },
    },
    {
      key: 'title',
      name: 'Task',
      draggable: true,
      renderSummaryCell({ row }) {
        return `${row.totalCount} records`;
      },
    },
    {
      key: 'client',
      name: 'Client',
      width: 'max-content',
    },
  ];

  const [rows, setRows] = useState(createRows({ index: 5 }));
  const columns2 = useMemo(() => myGetcolumns, [myGetcolumns]);

  return (
    <>
      <DataGrid
        style={{
          border: '5px solid blue',
          wordBreak: 'break-all',
          height: '300px',
          margin: '0',
          padding: '0',
          backgroundColor: '#FF0000',
          //#FFE4C4
          colorScheme: 'red',
          color: 'blueviolet',
        }}
        columns={columns2}
        rows={rows}
      ></DataGrid>
    </>
  );
}
