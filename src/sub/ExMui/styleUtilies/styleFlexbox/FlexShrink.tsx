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

export default function FlexShrink() {
  return (
    <div style={{ width: '100%' }}>
      <h3>Shrink 는 수축이라는 뜻 </h3>
      <span>{'<Item sx={{ width: 100% }}>Item 1</Item>'}</span>
      <br />
      <span>{'<Item sx={{ flexShrink: 1 }}>Item 2</Item>'}</span>
      <br />
      <span>{'<Item sx={{ flexShrink: 0 }}>Item 3</Item>'}</span>

      <Box
        sx={{
          display: 'flex',
          p: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <Item sx={{ width: '100%' }}>Item 1</Item>
        <Item sx={{ flexShrink: 1 }}>Item 2</Item>
        <Item sx={{ flexShrink: 0 }}>Item 3</Item>
      </Box>
    </div>
  );
}
