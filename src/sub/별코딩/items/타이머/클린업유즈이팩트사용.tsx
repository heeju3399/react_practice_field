import { useEffect, useState } from 'react'

export default function 클린업유즈이팩트사용() {
    const oksk = 1;
    const MINUTES_IN_MS = 3 * 60 * 1000;
    const INTERVAL = 1000;
    const [timeLeft, setTimeLeft] = useState(MINUTES_IN_MS);
    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - INTERVAL);
        }, INTERVAL);
        oksk

        if (timeLeft <= 0) {
            clearInterval(timer);
            console.log('타이머가 종료되었습니다.');
        }
        return (() => clearInterval(timer));

    }, [timeLeft]);
    let 초 = timeLeft / 1000;

    return (
        <div>
            <h3>Timer : {초}</h3>
            {minutes} : {second}
        </div>
    );
};