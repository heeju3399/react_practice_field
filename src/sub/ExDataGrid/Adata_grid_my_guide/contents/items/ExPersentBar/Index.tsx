import { Typography } from '@mui/material';
import DataGrid from 'react-data-grid';
import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import createRows, {
  getComparator,
} from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/row';
import { SortColumn } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird';
import { Row } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/interface_row';
import { dialogContainerClassname } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/Columns';

export default function ExPersentBar() {
  return (
    <>
      <Typography>ExPersentBar</Typography>

      <pre>
        해당 컬럼 안에 <br />
        {`
        {
          key: 'progress',
          name: 'Completion',
          renderCell(props) {
            const value = props.row.progress;
            return (
              <>
                <progress max={100} value={value} style={{ inlineSize: 50 }} />
                {Math.round(value)}%
              </>
            );
          },
          renderEditCell({ row, onRowChange, onClose }) {
            return createPortal(
              <div
                className={css {dialogContainerClassname}}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
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
      key: 'progress',
      name: 'Completion',
      renderCell(props) {
        const value = props.row.progress;
        return (
          <>
            <progress max={100} value={value} style={{ inlineSize: 50 }} />
            {Math.round(value)}%
          </>
        );
      },
      renderEditCell({ row, onRowChange, onClose }) {
        return createPortal(
          <div
            className={`css ${dialogContainerClassname}`}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
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
        columns={columns2}
        rows={sortedRows}
        selectedRows={selectedRows}
        onSelectedRowsChange={setSelectedRows}
        onRowsChange={setRows}
      ></DataGrid>
    </>
  );
}
