import { useMemo, useState } from 'react';
import { Column, RenderCheckboxProps, RenderSortStatusProps, SortColumn } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/types';
import DataGrid, { SelectColumn } from 'react-data-grid';
import './index.css';
import textEditor from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/TextEditor';
import Typography from '@mui/material/Typography';

const selectCellClassname = "selectCellClassname";
const sortPriorityClassname = "sortPriorityClassname";

interface Row {
  id: number;
  task: string;
  complete: number;
  priority: string;
  issueType: string;
}

function createRows(): readonly Row[] {
  const rows: Row[] = [];

  for (let i = 1; i < 10; i++) {
    rows.push({
      id: i,
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][Math.round(Math.random() * 3)],
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.round(Math.random() * 3)]
    });
  }

  return rows;
}

const columns: readonly Column<Row>[] = [
  {    
    ...SelectColumn,    
    headerCellClass: selectCellClassname,
    cellClass: selectCellClassname
  },
  {
    key: 'id',
    name: 'ID',
    width: 50
  },
  {
    key: 'task',
    name: 'Title',
    renderEditCell: textEditor,
    sortable: true
  },
  {
    key: 'priority',
    name: 'Priority',
    sortable: true
  },
  {
    key: 'issueType',
    name: 'Issue Type',
    sortable: true
  },
  {
    key: 'complete',
    name: '% Complete',
    sortable: true
  }
];

export default function CustomizableRenderers() {
  const direction = 'ltr';
  const [rows, setRows] = useState(createRows);
  const [sortColumns, setSortColumns] = useState<readonly SortColumn[]>([]);
  const [selectedRows, setSelectedRows] = useState((): ReadonlySet<number> => new Set());

  const sortedRows = useMemo((): readonly Row[] => {
    console.log("+++++++++++sortColumns++++++++++", sortColumns);
    console.log("xxxxxxxxxxxxxselectedRowsxxxxxxxxxxx", selectedRows);
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
<Typography>console</Typography>
<Typography>체크박스, 정렬을 커스텀해서 볼수있음</Typography>
<hr/>
<DataGrid
      className="fill-grid789"
      columns={columns}
      rows={sortedRows}
      rowKeyGetter={rowKeyGetter}
      onRowsChange={setRows}
      sortColumns={sortColumns}
      onSortColumnsChange={setSortColumns}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      renderers={{ renderSortStatus, renderCheckbox }}      
      direction={direction}
    />
</>
    
  );
}

function renderCheckbox({ onChange, ...props }: RenderCheckboxProps) { // 체크박스 클릭시 호출
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("renderCheckbox pass", props );
    onChange(e.target.checked, (e.nativeEvent as MouseEvent).shiftKey);      //쉬프트 키 헐,,                 
  }

  return <input type="checkbox" {...props} onChange={handleChange} />;
}

function renderSortStatus({ sortDirection, priority }: RenderSortStatusProps) {
  console.log("==renderSortStatus pass==");
  return (
    <>
      {sortDirection !== undefined ? (sortDirection === 'ASC' ? '\u2B9D' : '\u2B9F') : null}
      <span className={sortPriorityClassname}>{priority}</span>
    </>
  );
}

function rowKeyGetter(row: Row) {
  return row.id;
}

type Comparator = (a: Row, b: Row) => number;

function getComparator(sortColumn: string): Comparator {
  switch (sortColumn) {
    case 'task':
    case 'priority':
    case 'issueType':
      return (a, b) => {
        return a[sortColumn].localeCompare(b[sortColumn]);
      };
    case 'complete':
      return (a, b) => {
        return a[sortColumn] - b[sortColumn];
      };
    default:
      throw new Error(`unsupported sortColumn: "${sortColumn}"`);
  }
}
