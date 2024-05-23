import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type typeOfHandleDrawerToggle = {
    handleDrawerToggle: React.MouseEventHandler
}

export default function Appbar({ handleDrawerToggle }: typeOfHandleDrawerToggle) {
    const drawerWidth = 340;
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ButtonTap />
                </Toolbar>
            </AppBar>
        </>
    )
}
//TODO:

function ButtonTap() {
    return (
        <ButtonGroup>
            {/* //TODO 홈으로 가는 버튼 구현 */}
            <Button style={{
                borderRadius: 10,
                margin: 10,
                backgroundColor: "#FF69B4",
                color: '#000000'
            }} size="large" variant="contained" >Home</Button>
            <Button style={{
                borderRadius: 10,
                margin: 10,
                backgroundColor: "#4caf50",
                color: '#f2aeae'
            }} size="large" variant="contained" >별코딩</Button>
            <Button style={{
                borderRadius: 10,
                margin: 10,
                backgroundColor: "#4caf",
                color: '#f2aeae'
            }} size="large" variant="contained" >생활코딩</Button>
            <Button style={{
                borderRadius: 10,
                margin: 10,
                backgroundColor: "#4caf50",
                color: '#f2aeae'
            }} size="large" variant="contained" >MUI</Button>
            <Button style={{
                borderRadius: 10,
                margin: 10,
                backgroundColor: "#4caf",
                color: '#f2aeae'
            }} size="large" variant="contained" >Ex_LOGIN</Button>
            <Button style={{
                borderRadius: 10,
                margin: 10,
                backgroundColor: "#4caf50",
                color: '#f2aeae'
            }} size="large" variant="contained" >grid data</Button>
        </ButtonGroup>
    )
}

