import { useState } from 'react';
import { Column } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/types';

// import DataGrid from '../../src';
// import type { Column } from '../../src';
// import type { Props } from './types';
import DataGrid from 'react-data-grid';
import './index.css';

const rangeClassname = 'rangeClassname';
const transitionClassname = 'transitionClassname';
const headerCellClass = 'ExAnimation_headerCellClass';

interface Row {
  readonly id: number;
  readonly task: string;
  readonly complete: number;
  readonly priority: string;
  readonly issueType: string;
}

function createRows(): Row[] {
  const rows: Row[] = [];

  for (let i = 1; i < 5; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][
        Math.round(Math.random() * 3)
      ],
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][
        Math.round(Math.random() * 3)
      ],
    });
  }

  return rows;
}

const columns: Column<Row>[] = [
  {
    key: 'id',
    name: 'ID',
    width: 50,

    headerCellClass: headerCellClass,
  },
  {
    key: 'task',
    name: 'Title',
    resizable: true,
    headerCellClass: headerCellClass,
  },
  {
    key: 'priority',
    name: 'Priority',
    resizable: true,
    headerCellClass: headerCellClass,
  },
  {
    key: 'issueType',
    name: 'Issue Type',
    resizable: true,
    headerCellClass: headerCellClass,
  },
  {
    key: 'complete',
    name: '% Complete',
    resizable: true,
    headerCellClass: headerCellClass,
  },
];

const rows = createRows();

export default function ExColumnsReordering() {
  const direction = 'ltr';
  const [rowHeight, setRowHeight] = useState(40);

  return (
    <>
      <div className={rangeClassname}>
        Row Height : {rowHeight}
        <button type="button" onClick={() => setRowHeight(40)}>
          Small
        </button>
        <button type="button" onClick={() => setRowHeight(60)}>
          Medium
        </button>
        <button type="button" onClick={() => setRowHeight(80)}>
          Large
        </button>
      </div>
      <hr />
      <div className={'testOfHover'}>testOfHover</div>
      <pre>
        {`
          이렇게 넣어야 함
          transition: grid-template-rows 0.5s ease;
        `}
      </pre>
      <div className={'testOfHover'}>testOfHover</div>

      <hr />
      <DataGrid
        className={transitionClassname}
        columns={columns}
        rows={rows}
        direction={direction}
        rowHeight={rowHeight}
      />
    </>
  );
}
