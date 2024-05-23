import { createContext, useContext, useState } from "react";
import './star.css';

type useStateType = {
    isDark: boolean;
    setIsDark?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext3 = createContext<useStateType>(
    { isDark: false }
);

export default function ExUseContext() {
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <ThemeContext3.Provider value={{ isDark, setIsDark }}>
                <Page></Page>
            </ThemeContext3.Provider>
        </>
    );
}

function Page() {

    return (
        <div className="page">
            <Header ></Header>
            <Content ></Content>
            <Footer ></Footer>
        </div>
    )
}

function Content() {
    const usecon = useContext(ThemeContext3);
    return (<>
        <div className='content'
            style={
                {
                    backgroundColor: usecon.isDark ? 'black' : 'lightgray',
                    color: usecon.isDark ? 'white' : 'black'
                }
            }>
            <p>길동님 좋은하루 되세요</p>
        </div>
    </>);
}

function Header() {
    const usecon = useContext(ThemeContext3);
    return (<>
        <header className='header'
            style={
                {
                    backgroundColor: usecon.isDark ? 'black' : 'lightgray',
                    color: usecon.isDark ? 'white' : 'black'
                }
            }>
            <h2>ExUseContext</h2>
        </header>
    </>);
}

function Footer() {
    const usecon = useContext(ThemeContext3);
    const toggleTheme = () => {
        if (usecon.setIsDark != null) {
            console.log("props:", usecon.setIsDark);
            usecon.setIsDark(!usecon.isDark)
        }
    }

    return (<>
        <footer className='footer'
            style={
                {
                    backgroundColor: usecon.isDark ? 'black' : 'lightgray',
                }
            }>
            <button className='button' onClick={toggleTheme}>Dark Mode</button>
        </footer>
    </>);
}


