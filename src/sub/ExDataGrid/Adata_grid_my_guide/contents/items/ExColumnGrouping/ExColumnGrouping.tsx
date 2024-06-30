import DataGrid from 'react-data-grid';
import './ColumnGrouping.css';
import { ColumnOrColumnGroup } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/types';
import { renderCoordinates } from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/renderCoordinates';


const columns: readonly ColumnOrColumnGroup<number, number>[] = [
  {
    key: '0',
    name: 'ID',
    width: 50,
    headerCellClass: 'idHeaderCellClass',
    // summaryCellClass:"idsummaryCellClass",
    // cellClass: 'idcellClass',
  },
  {
    key: '1',
    name: 'Group',
    //cellClass: 'oksk',

    children: [
      {
        key: '1',
        name: '이곳이 해더1', //headerCellClass: 'headerCellClass3'
      },
      { key: '2', name: 'Column 2' },
      { key: '3', name: 'Column 3' },
    ],
  },
];
const rows: readonly number[] = Array.from({ length: 10 }, (_, i) => i);
export default function ColumnGrouping() {
  console.log('ColumnGrouping pass!!');
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      // topSummaryRows={[0]}
      // bottomSummaryRows={[6]}
      className="filterCell99"
      //direction={direction}
      defaultColumnOptions={{
        resizable: true,
        renderCell: renderCoordinates,
      }}
      //rowHeight={50}
      // headerRowHeight={50}
    />
  );
}
