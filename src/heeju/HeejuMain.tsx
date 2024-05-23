import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Contents from './Content';
import Appbar from './Appbar';
import NavPage from './Nav';

export default function HeejuMain() {
    const drawerWidth = 340;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [page, setPage] = useState(0);
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Appbar handleDrawerToggle={handleDrawerToggle} />
                <NavPage
                    setPage={setPage}
                    setIsClosing={setIsClosing}
                    setMobileOpen={setMobileOpen}
                    mobileOpen={mobileOpen}
                />
                <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}            >
                    <Toolbar />
                    <Contents index={page} />
                </Box>
            </Box>
        </>
    );
}
