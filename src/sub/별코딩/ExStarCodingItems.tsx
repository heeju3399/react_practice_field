import ExUseState from "./items/ExUseState";
import ExUseCallback from "./items/ExUseCallback";
import ExUseCallback2 from "./items/ExUseCallback2";
import ExUseContext from "./items/ExUseContext";
import ExUseContextUseState from "./items/ExUseContextUseState";
import ExUseCustomHook from "./items/ExUseCustomHook";
import ExUseCustomHook2My from "./items/ExUseCustomHook2My";
import ExUseCustomHook2 from "./items/ExUseCustomHook2";
import ExUseCustomHook2Custom from "./items/ExUseCustomHook2Custom";
import ExUseEffect from "./items/ExUseEffect";
import ExUseId from "./items/ExUseId";
import ExUseId2 from "./items/ExUseId2";
import ExUseLayoutEffect from "./items/ExUseLayoutEffect";
import ExUseLayoutEffect2 from "./items/ExUseLayoutEffect2";
import ExUseMemo from "./items/ExUseMemo";
import ExUseMemo2 from "./items/ExUseMemo2";
import ExUseReducer from "./items/ExUseReducer";
import ExUseReducer2 from "./items/ExUseReducer2";
import ExUseRef from "./items/ExUseRef";
import 컴포넌트최적화 from "./items/컴포넌트최적화";
import 타이머 from "./items/타이머/클린업유즈이팩트사용";

type tpyeListItem = { id: number; title: string; content: JSX.Element }[];

export const exStarCodingItems: tpyeListItem = [
  { id: 0, title: "useState", content: <ExUseState /> },
  { id: 1, title: "ExUseCallback", content: <ExUseCallback /> },
  { id: 2, title: "ExUseCallback2", content: <ExUseCallback2 /> },
  { id: 3, title: "ExUseContext", content: <ExUseContext /> },
  { id: 4, title: "ExUseContextUseState", content: <ExUseContextUseState /> },
  { id: 5, title: "ExUseCustomHook", content: <ExUseCustomHook /> },
  { id: 6, title: "ExUseCustomHook_My", content: <ExUseCustomHook2My /> },
  { id: 7, title: "ExUseCustomHook2", content: <ExUseCustomHook2 /> },
  {
    id: 8,
    title: "ExUseCustomHook2Custom",
    content: <ExUseCustomHook2Custom />,
  },
  { id: 9, title: "ExUseEffect", content: <ExUseEffect /> },
  { id: 10, title: "ExUseId", content: <ExUseId /> },
  { id: 11, title: "ExUseId2", content: <ExUseId2 /> },
  { id: 12, title: "ExUseLayoutEffect", content: <ExUseLayoutEffect /> },
  {
    id: 13,
    title: "ExUseLayoutEffect2",
    content: <ExUseLayoutEffect2 />,
  },
  { id: 14, title: "ExUseMemo", content: <ExUseMemo /> },
  { id: 15, title: "ExUseMemo2", content: <ExUseMemo2 /> },
  { id: 16, title: "ExUseReducer", content: <ExUseReducer /> },
  { id: 17, title: "ExUseReducer2", content: <ExUseReducer2 /> },
  { id: 18, title: "ExUseRef", content: <ExUseRef /> },
  { id: 19, title: "ExUseState", content: <ExUseState /> },
  { id: 20, title: "컴포넌트최적화", content: <컴포넌트최적화 /> },
  { id: 21, title: "타이머", content: <타이머 /> },
];
