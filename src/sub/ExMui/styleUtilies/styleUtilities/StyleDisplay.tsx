import * as React from 'react';
import Box from '@mui/system/Box';

function Inline() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="div"
        sx={{
          display: 'inline',
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        inline
      </Box>
      <Box
        component="div"
        sx={{
          display: 'inline',
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        inline
      </Box>
    </div>
  );
}

function Block() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        block
      </Box>
      <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        block
      </Box>
    </div>
  );
}

function Hiding() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          m: 1,
          fontSize: '0.875rem',
          fontWeight: '700',
          border: '1px solid red',
        }}
      >
        Hiding 여기는 보여지는 곳
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          m: 1,
          fontSize: '0.875rem',
          fontWeight: '700',
          border: '1px solid green',
        }}
      >
        Hiding 여기는 안보여짐 sx 에 none 주면 됨!!
      </Box>
      <Box
        sx={{
          display: { xs: 'block', lg: 'block', xl: 'none' },
          m: 1,
          fontSize: '0.875rem',
          fontWeight: '700',
          border: '1px solid green',
        }}
      >
        Hiding 뭐지?
      </Box>
    </div>
  );
}

function Overflow() {
  return (
    <div style={{ width: 200, whiteSpace: 'nowrap' }}>
      <Box
        component="div"
        sx={{
          overflow: 'hidden',
          my: 2,
          p: 1,
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
        }}
      >
        Not scrollable, overflow is hidden
      </Box>
      <Box
        component="div"
        sx={{
          overflow: 'auto',
          my: 2,
          p: 1,
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
        }}
      >
        Try scrolling this overflow auto box
      </Box>
    </div>
  );
}

function TextOverflow() {
  return (
    <div style={{ width: 200, whiteSpace: 'nowrap' }}>
      <Box
        component="div"
        sx={{
          textOverflow: 'clip',
          overflow: 'hidden',
          my: 2,
          p: 1,
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
        }}
      >
        Lorem Ipsum is simply dummy text
      </Box>
      <Box
        component="div"
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          my: 2,
          p: 1,
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
        }}
      >
        Lorem Ipsum is simply dummy text
      </Box>
    </div>
  );
}

function Visibility() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        component="span"
        sx={{
          visibility: 'visible',
          my: 2,
          p: 1,
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
        }}
      >
        Visible container
      </Box>
      <Box
        component="span"
        sx={{
          visibility: 'hidden',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        Invisible container
      </Box>
    </div>
  );
}

function WhiteSpace() {
  return (
    <div style={{ width: 200 }}>
      <Box
        component="div"
        sx={{
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          my: 2,
          p: 1,
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
        }}
      >
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s.
      </Box>
      <Box
        component="div"
        sx={{
          whiteSpace: 'normal',
          my: 2,
          p: 1,
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
        }}
      >
        Lorem Ipsum has been the industry&apos;s standard dummy text ever since
        the 1500s.
      </Box>
    </div>
  );
}

export default function StyleDisplay() {
  return (
    <div
      style={{
        border: '1px solid green',
        //height: '1000px',
        //overflowY: 'scroll',
      }}
    >
      <h5>DISPLAY!</h5>
      <Inline />
      <hr />
      <Block />
      <br />
      <Hiding />
      <hr />
      <h3>overflow</h3>
      <Overflow />
      <hr />
      <h3>TextOverflow</h3>
      <TextOverflow />
      <hr />
      <h3>Visibility</h3>
      <Visibility />

      <hr />
      <h3>WhiteSpace</h3>
      <WhiteSpace />
    </div>
  );
}
