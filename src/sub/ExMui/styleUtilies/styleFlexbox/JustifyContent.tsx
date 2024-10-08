import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
        color: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function JustifyContent() {
  return (
    <div style={{ width: '100%' }}>
      <h3> 사이간격 조정 justifyContent: 'flex-start'</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid blue',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <h3> justifyContent: 'flex-end'</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid green',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <h3> justifyContent: center</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid black',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <h3> justifyContent: space-between</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <h3> justifyContent: space - around</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid green',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
      <h3> justifyContent: space-evenly</h3>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid blue',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Box>
    </div>
  );
}
