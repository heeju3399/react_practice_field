import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import SaveIcon from '@mui/icons-material/Save';

// App.tsx에 Tab과 합치며 AppBar 중복 제거
const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(45deg, #04A7FC 30%, #2745B7 90%)',
    width: '100%'
  });


const Header: React.FC = () => {

  return (
		// <StyledAppBar>
			<Toolbar sx={{ justifyContent: 'space-between', width: '100%', background: 'linear-gradient(45deg, #04A7FC 30%, #2745B7 90%)'  }}>

        {/* 왼쪽 */}
        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <DescriptionIcon />
          </IconButton>
          <Typography variant="h6" sx={{ display: 'inline-block' }} >
            월말성도변동현황
          </Typography>
        </div>
          
        {/* 오른쪽 */}
        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
					<IconButton color="inherit" aria-label="save">
						<SaveIcon />
					</IconButton>
					<IconButton color="inherit" aria-label="bookmark">
						<StarIcon />
					</IconButton>
				</div>
			</Toolbar>
		// </StyledAppBar>
  );
};

export default Header;
