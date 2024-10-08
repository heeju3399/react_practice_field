import { createContext, useContext } from 'react';

import type { SelectRowEvent } from './types';

const RowSelectionContext = createContext<boolean | undefined>(undefined);

export const RowSelectionProvider = RowSelectionContext.Provider;

const RowSelectionChangeContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((selectRowEvent: SelectRowEvent<any>) => void) | undefined
>(undefined);

export const RowSelectionChangeProvider = RowSelectionChangeContext.Provider;

export function useRowSelection<R>(): [
  boolean,
  (selectRowEvent: SelectRowEvent<R>) => void
] {
  // | { type: 'HEADER'; checked: boolean }
  // | { type: 'ROW'; row: TRow; checked: boolean; isShiftClick: boolean };

  const rowSelectionContext = useContext(RowSelectionContext);
  const rowSelectionChangeContext = useContext(RowSelectionChangeContext);
  //return [rowSelectionContext!, rowSelectionChangeContext!];
  if (
    rowSelectionContext === undefined ||
    rowSelectionChangeContext === undefined
  ) {
    throw new Error('useRowSelection must be used within DataGrid cells');
  }

  return [rowSelectionContext, rowSelectionChangeContext];
}
