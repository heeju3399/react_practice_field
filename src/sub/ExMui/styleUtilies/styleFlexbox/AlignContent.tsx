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

export default function AlignContent() {
  return (
    <div style={{ width: '100%' }}>
      <h3>
        위 중간 아래의 위치 조정 display: 'flex', flexWrap: 'wrap',
        alignContent: 'flex-start'
      </h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 380,
          height: 200,
          borderRadius: 1,
          border:'2px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
      </Box>
      <h3>alignContent: 'flex-end',</h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-end',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 380,
          height: 200,
          borderRadius: 1,
          border:'2px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
      </Box>
      <h3>alignContent: 'center',</h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 380,
          height: 200,
          borderRadius: 1,
          border:'2px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
      </Box>
      <h3>alignContent: 'space-between',</h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'space-between',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 380,
          height: 200,
          borderRadius: 1,
          border:'2px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
      </Box>
      <h3>alignContent: 'space-around',</h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'space-around',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 380,
          height: 200,
          borderRadius: 1,
          border:'2px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
      </Box>
      <h3>alignContent: 'stretch'</h3>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'stretch',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: 380,
          height: 200,
          borderRadius: 1,
          border:'2px solid red',
        }}
      >
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
        <Item>Item 7</Item>
      </Box>
    </div>
  );
}
