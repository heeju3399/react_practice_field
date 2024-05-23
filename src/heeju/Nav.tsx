import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

type typeOfNav = {
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setIsClosing: React.Dispatch<React.SetStateAction<boolean>>,
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>,
    mobileOpen: boolean
}

export default function NavPage({ setPage, setIsClosing, setMobileOpen, mobileOpen }: typeOfNav) {
    const drawerWidth = 340;
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const starCodingList = [
        'useState', 'ExUseCallback', 'ExUseCallback2', 'ExUseContext', 'ExUseContext-UseState',
        'ExUseCustomHook', 'ExUseCustomHook_My', 'ExUseCustomHook2', 'ExUseCustomHook2Custom', 'ExUseEffect',
        'ExUseId', 'ExUseId2', 'ExUseLayoutEffect', 'ExUseEfExUseLayoutEffect2fect',
        'ExUseMemo', 'ExUseMemo2', 'ExUseReducer', 'ExUseReducer2',
        'ExUseRef', 'ExUseState', '컴포넌트최적화', '타이머'
    ];
    const navBtnClick = (index: number) => {
        console.log('index:', index)
        setPage(index);
    }
    const navTitle = (name: string) => {
        return (
            <>
                <Divider />
                <Typography variant="h6" sx={{ m: 1, textAlign: 'center' }}>
                    {name}
                </Typography>
                <Divider />
            </>
        )
    }

    const NavTitlePage = (
        <div>
            <Typography variant="h5" sx={{ my: 2, textAlign: 'center', color: '#00e676' }}>
                heeju_main
            </Typography>
            {navTitle('별코딩')}
            <List >
                {starCodingList.map((text, index) => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton onClick={() => { navBtnClick(index) }}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {navTitle('생활코딩')}
            {/* //아직은 예제임 */}
            <List>
                {['All mail', 'Trash', 'Spam'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            {/* <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon> */}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {NavTitlePage}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {NavTitlePage}
                </Drawer>
            </Box>
        </>

    )
}

