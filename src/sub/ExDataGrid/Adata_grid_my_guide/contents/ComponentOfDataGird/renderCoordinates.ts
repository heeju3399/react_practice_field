import type { RenderCellProps } from './types';

export function renderCoordinates(props: RenderCellProps<number>) {
  return `${props.column.key}×${props.row}`;
}

