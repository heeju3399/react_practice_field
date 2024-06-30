import { Typography } from '@mui/material';
import ColumnGrouping from './ExColumnGrouping';

export default function ExColumnGrouping() {
  return (
    <>
      <Typography variant="h4">
        컬럼그룹 및 합치고 중앙 정렬 및 위아래 중앙으로 넣기
      </Typography>
      <br />
      <Typography variant="body1">
        <b>{`해당 컬럼에 {headerCellClass: 'idHeaderCellClass'} 추가하고 css 만들어서 .idHeaderCellClass{여기에 css 인자!}`}</b>
        <br />
        <hr />
        컬럼 인자 <br />
        headerCellClass: 'idHeaderCellClass' <b>해더 셀 css</b> <br />
        summaryCellClass:"idsummaryCellClass" <b>서머리 셀 css</b> <br />
        cellClass: 'idcellClass' <b>로우 row 셀 css</b> <br />
      </Typography>
      <br />
      <hr />
      <Typography variant="h6">
        ID 위 아래 중앙 정렬 하려면 css 에 line-height: 0 추가
      </Typography>
      <br />
      <hr />
      <Typography variant="h6"> 그룹 방법 </Typography>
      <pre>{`{
    key: '1',
    name: 'Group',    
    children: [
      { key: '1', name: 'Column 1' },
      { key: '2', name: 'Column 2' },
      { key: '3', name: 'Column 3' },
    ],
  },`}</pre>

      <ColumnGrouping />
    </>
  );
}
