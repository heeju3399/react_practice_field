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

export default function AlignSelf() {
  return (
    <div style={{ width: '100%' }}>
      <h3>각각 움직임 (AlignSelf)</h3>
      <span>{'<Item>Item 1</Item>'}</span>
      <br />
      <span>{"<Item sx={{ alignSelf: 'flex-end' }}>Item 2</Item>"}</span>
      <br />
      <span>{'<Item>Item 3</Item>'}</span>
      <span>{"<Item sx={{ alignSelf: 'center' }}>Item 4</Item>"}</span>
      <br />
      <span>{' <Item sx={{ alignSelf: normal }}>Item 5</Item>'}</span>
      <br />
      <span>{"  <Item sx={{ alignSelf: 'stretch' }}>Item 6</Item> "}</span>
      <br />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          height: 124,
          borderRadius: 1,
          border: '1px solid orange',
        }}
      >
        <Item>Item 1</Item>
        <Item sx={{ alignSelf: 'flex-end' }}>Item 2</Item>
        <Item>Item 3</Item>
        <Item sx={{ alignSelf: 'center' }}>Item 4</Item>
        <Item sx={{ alignSelf: 'normal' }}>Item 5</Item>
        <Item sx={{ alignSelf: 'stretch' }}>Item 6</Item>
      </Box>
    </div>
  );
}
