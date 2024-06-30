import { RenderEditCellProps } from './types';
import { Row } from './interface_row';

const textEditorInternalClassname = `
  @layer rdg.TextEditor {
    appearance: none;

    box-sizing: border-box;
    inline-size: 100%;
    block-size: 100%;
    padding-block: 0;
    padding-inline: 6px;
    border: 2px solid #ccc;
    vertical-align: top;
    color: var(--rdg-color);
    background-color: var(--rdg-background-color);

    font-family: inherit;
    font-size: var(--rdg-font-size);

    &:focus {
      border-color: var(--rdg-selection-color);
      outline: none;
    }

    &::placeholder {
      color: #999;
      opacity: 1;
    }
  }
`;

const titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'] as const;
const textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`; //css 없앰

export function renderDropdown({ row, onRowChange }: RenderEditCellProps<Row>) {
  return (
    <select
      className={textEditorClassname}
      value={row.title}
      onChange={(event) =>
        onRowChange({ ...row, title: event.target.value }, true)
      }
      autoFocus
    >
      {titles.map((title) => (
        <option key={title} value={title}>
          {title}
        </option>
      ))}
    </select>
  );
}
