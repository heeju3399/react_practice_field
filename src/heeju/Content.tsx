import ExUseCallback from './별코딩/ExUseCallback';
import ExUseCallback2 from './별코딩/ExUseCallback2';
import ExUseContext from './별코딩/ExUseContext';
import ExUseContextUseState from './별코딩/ExUseContext-UseState';
import ExUseEffect from './별코딩/ExUseEffect';
import ExUseId from './별코딩/ExUseId';
import ExUseId2 from './별코딩/ExUseId2';
import ExUseLayoutEffect from './별코딩/ExUseLayoutEffect';
import ExUseLayoutEffect2 from './별코딩/ExUseLayoutEffect2';
import ExUseMemo from './별코딩/ExUseMemo';
import ExUseMemo2 from './별코딩/ExUseMemo2';
import ExUseReducer from './별코딩/ExUseReducer';
import ExUseReducer2 from './별코딩/ExUseReducer2';
import ExUseRef from './별코딩/ExUseRef';
import ExUseState from './별코딩/ExUseState';
import 컴퓨넌트최적화 from './별코딩/컴포넌트최적화';
import ExUseCustomHook2Custom from './별코딩/ExUseCustomHook2Custom';
import ExUseCustomHook2 from './별코딩/ExUseCustomHook2';
import ExUseCustomHook from './별코딩/ExUseCustomHook';
import ExUseCustomHook2My from './별코딩/ExUseCustomHook_My';
import 클린업유즈이팩트사용 from './별코딩/타이머/클린업유즈이팩트사용';

type typeOfContents = {
    index: number
}

export default function Contents({ index }: typeOfContents): JSX.Element {

    switch (index) {
        case 0:
            return <ExUseState />
        case 1:
            return <ExUseCallback />
        case 2:
            return <ExUseCallback2 />
        case 3:
            return <ExUseContext />
        case 4:
            return <ExUseContextUseState />
        case 5:
            return <ExUseCustomHook />
        case 6:
            return <ExUseCustomHook2My />
        case 7:
            return <ExUseCustomHook2 />
        case 8:
            return <ExUseCustomHook2Custom />
        case 9:
            return <ExUseEffect />
        case 10:
            return <ExUseId />
        case 11:
            return <ExUseId2 />
        case 12:
            return <ExUseLayoutEffect />
        case 13:
            return <ExUseLayoutEffect2 />
        case 14:
            return <ExUseMemo />
        case 15:
            return <ExUseMemo2 />
        case 16:
            return <ExUseReducer />
        case 17:
            return <ExUseReducer2 />
        case 18:
            return <ExUseRef />
        case 19:
            return <ExUseState />
        case 20:
            return <컴퓨넌트최적화 />
        case 21:
            return <클린업유즈이팩트사용 />
        // case 18:
        //     return <h4>판매자 로그인</h4>
        // case 19:
        //     return </>

        default:
            return <h4>Not Found</h4>
    }



}