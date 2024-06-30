import { createContext, useContext, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';
import DataGrid from 'react-data-grid';
import {
  Column,
  RenderHeaderCellProps,
} from '../../../../Adata_grid_my_guide/contents/ComponentOfDataGird/types';
import './index.css';

export default function MyFileterTest() {
  const direction = 'ltr';
  const [rows] = useState(createRows);
  const [filters, setFilters] = useState(
    (): Filter => ({
      //기본값
      task: '',
      priority: 'All',
      issueType: 'All',
      developer: '',
      complete: undefined,
      enabled: true,
    })
  );

  const developerOptions = useMemo(
    () =>
      Array.from(new Set(rows.map((r) => r.developer))).map((d) => ({
        label: d,
        value: d,
      })),
    [rows]
  );

  const columns = useMemo((): readonly Column<Row>[] => {
    return [
      {
        key: 'id',
        name: 'ID',
        width: 50,
      },
      {
        key: 'task',
        name: 'Title',
        headerCellClass: filterColumnClassName, //아 요기서 이 필터가 적용됨
        renderHeaderCell: (p) => (
          <FilterRenderer<Row> {...p}>
            {({ filters, ...rest }) => (
              <input
                {...rest}
                className={filterClassname}
                value={filters.task}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    task: e.target.value,
                  })
                }
                onKeyDown={inputStopPropagation}
              />
            )}
          </FilterRenderer>
        ),
      },
      {
        key: 'priority',
        name: 'Priority',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => (
          <FilterRenderer<Row> {...p}>
            {({ filters, ...rest }) => (
              <select
                {...rest}
                className={filterClassname}
                value={filters.priority}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    priority: e.target.value,
                  })
                }
                onKeyDown={selectStopPropagation}
              >
                <option value="All">All</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            )}
          </FilterRenderer>
        ),
      },
      {
        key: 'issueType',
        name: 'Issue Type',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => (
          <FilterRenderer<Row> {...p}>
            {({ filters, ...rest }) => (
              <select
                {...rest}
                className={filterClassname}
                value={filters.issueType}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    issueType: e.target.value,
                  })
                }
                onKeyDown={selectStopPropagation}
              >
                <option value="All">All</option>
                <option value="Bug">Bug</option>
                <option value="Improvement">Improvement</option>
                <option value="Epic">Epic</option>
                <option value="Story">Story</option>
              </select>
            )}
          </FilterRenderer>
        ),
      },
      {
        key: 'developer',
        name: 'Developer',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => (
          <FilterRenderer<Row> {...p}>
            {({ filters, ...rest }) => (
              <input
                {...rest}
                className={filterClassname}
                value={filters.developer}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    developer: e.target.value,
                  })
                }
                onKeyDown={inputStopPropagation}
                list="developers"
              />
            )}
          </FilterRenderer>
        ),
      },
      {
        key: 'complete',
        name: '% Complete',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => (
          <FilterRenderer<Row> {...p}>
            {({ filters, ...rest }) => (
              <input
                {...rest}
                type="number"
                className={filterClassname}
                value={filters.complete}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    complete: Number.isFinite(e.target.valueAsNumber)
                      ? e.target.valueAsNumber
                      : undefined,
                  })
                }
                onKeyDown={inputStopPropagation}
              />
            )}
          </FilterRenderer>
        ),
      },
    ];
  }, []);

  const filteredRows = useMemo(() => {
    return rows.filter((r) => {
      return (
        (filters.task ? r.task.includes(filters.task) : true) &&
        (filters.priority !== 'All' ? r.priority === filters.priority : true) &&
        (filters.issueType !== 'All'
          ? r.issueType === filters.issueType
          : true) &&
        (filters.developer
          ? r.developer
              .toLowerCase()
              .startsWith(filters.developer.toLowerCase())
          : true) &&
        (filters.complete !== undefined ? r.complete >= filters.complete : true)
      );
    });
  }, [rows, filters]);

  function clearFilters() {
    setFilters({
      task: '',
      priority: 'All',
      issueType: 'All',
      developer: '',
      complete: undefined,
      enabled: true,
    });
  }

  function toggleFilters() {
    setFilters((filters) => ({
      ...filters,
      enabled: !filters.enabled,
    }));
  }

  return (
    <>
      <div>
        <h3>컬럼 필터 핵심 // 정확히 어떻게 돌아가는지는 모르겠는데 뮈이렇게 돌아감</h3>
        <pre>
          {`
        key: 'task',
        name: 'Title',
        headerCellClass: filterColumnClassName,
        renderHeaderCell: (p) => (
          <FilterRenderer<Row> {...p}>
            {({ filters, ...rest }) => (
              <input
                {...rest}
                className={filterClassname}
                value={filters.task}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    task: e.target.value,
                  })
                }
                onKeyDown={inputStopPropagation}
              />
            )}
          </FilterRenderer>
        ),
      },`}
        </pre>
      </div>
      <hr />
      <div className={rootClassname}>
        <div className={toolbarClassname}>
          <button type="button" onClick={toggleFilters}>
            Toggle Filters
          </button>
          <button type="button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
        <FilterContext.Provider value={filters}>
          <DataGrid
            className={filters.enabled ? filterColumnClassName : undefined}
            columns={columns}
            rows={filteredRows}
            headerRowHeight={filters.enabled ? 70 : undefined}
            direction={direction}
          />
        </FilterContext.Provider>
        {/* 필터 목록 나오는 칸 */}
        <datalist id="developers">
          {developerOptions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </datalist>
      </div>
      <hr />
      <div>
        <h3>컬럼 필터 CSS 핵심</h3>
        <pre>
          {`
            
.rootClassname {
  display: flex;
  flex-direction: column;
  block-size: 100%;
  gap: 10px;
}
  
.rootClassname > .rdg{
  flex: 1;
}

.toolbarClassname{
  text-align: end;
}

.filterColumnClassName {
    line-height: 35px;
    padding: 0; 
}
.filterColumnClassName > .div {  
  padding-block: 0;
  padding-inline: 8px;
}

.filterColumnClassName > .div > .filterClassname {
  border-block-end: 1px solid var(--rdg-border-color);
}

.filterClassname {
  inline-size: 100%;
  padding: 4px;
  font-size: 14px;
  color:yellow;
}
  
       `}
        </pre>
      </div>
      <hr />
    </>
  );
}

function FilterRenderer<R>({
  tabIndex,
  column,
  children,
}: RenderHeaderCellProps<R> & {
  children: (args: { tabIndex: number; filters: Filter }) => React.ReactElement;
}) {
  const filters = useContext(FilterContext)!;
  return (
    <>
      <div>{column.name}</div>
      {filters.enabled && <div>{children({ tabIndex, filters })}</div>}
    </>
  );
}

function createRows() {
  const rows: Row[] = [];
  for (let i = 1; i < 10; i++) {
    rows.push({
      id: 99,
      task: `oksk223oop ${i}`,
      complete: 999999999999,
      priority: ['Critical', 'High', 'Medium', 'Low'][1], //아 여기에 0 넣으면 .. Critical 가나옴,,
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][1], //아 여기에 이걸넣으면 .. Improvement 가나옴,,
      developer: 'faker.person.fullName()',
    });
  }
  return rows;
}

//css
const rootClassname = 'rootClassname';
const toolbarClassname = 'toolbarClassname';
const filterColumnClassName = 'filterColumnClassName';
const filterClassname = 'filterClassname';

interface Row {
  id: number;
  task: string;
  priority: string;
  issueType: string;
  developer: string;
  complete: number;
}

interface Filter extends Omit<Row, 'id' | 'complete'> {
  complete: number | undefined;
  enabled: boolean;
}

// Context is needed to read filter values otherwise columns are
// re-created when filters are changed and filter loses focus
const FilterContext = createContext<Filter | undefined>(undefined);

function inputStopPropagation(event: React.KeyboardEvent<HTMLInputElement>) {
  if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
    event.stopPropagation();
  }
}

function selectStopPropagation(event: React.KeyboardEvent<HTMLSelectElement>) {
  if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
    event.stopPropagation();
  }
}
