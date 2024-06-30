import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { styled, createTheme, ThemeProvider } from '@mui/system';

function ZIndex() {
  return (
    <Typography
      component="div"
      variant="body1"
      style={{
        height: 100,
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.600',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 40,
          left: '40%',
          zIndex: 'tooltip',
        }}
      >
        z-index tooltip
      </Box>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 0,
          left: '43%',
          zIndex: 'modal',
        }}
      >
        z-index modal
      </Box>
    </Typography>
  );
}

function ShadowsDemo() {
  return (
    <Grid container>
      <Box
        sx={{
          boxShadow: 0,
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 0
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 1
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 2
      </Box>
      <Box
        sx={{
          boxShadow: 3,
          width: '8rem',
          height: '5rem',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        boxShadow: 3
      </Box>
    </Grid>
  );
}

function Values() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: 1 / 4,
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
          textAlign: 'center',
        }}
      >
        Width 1/4
      </Box>
      <Box
        sx={{
          width: 300,
          p: 1,
          my: 1,
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
          textAlign: 'center',
        }}
      >
        Width 300
      </Box>
      <Box
        sx={{
          width: '75%',
          p: 1,
          my: 1,
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
          textAlign: 'center',
        }}
      >
        Width 75%
      </Box>
      <Box
        sx={{
          width: 1,
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
          textAlign: 'center',
        }}
      >
        Width 1
      </Box>
    </Box>
  );
}

function Width() {
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: '25%',
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
          textAlign: 'center',
        }}
      >
        Width 25%
      </Box>
      <Box
        sx={{
          width: '50%',
          p: 1,
          my: 1,
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
          textAlign: 'center',
        }}
      >
        Width 50%
      </Box>
      <Box
        sx={{
          width: '75%',
          p: 1,
          my: 1,
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
          textAlign: 'center',
        }}
      >
        Width 75%
      </Box>
      <Box
        sx={{
          width: '100%',
          p: 1,
          my: 1,
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
          textAlign: 'center',
        }}
      >
        Width 100%
      </Box>
      <Box
        sx={{
          width: 'auto',
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
          textAlign: 'center',
        }}
      >
        Width auto
      </Box>
    </Box>
  );
}

function Height() {
  return (
    <Box sx={{ height: 100, width: '100%' }}>
      <Box
        sx={{
          height: '25%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
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
          textAlign: 'center',
        }}
      >
        Height 25%
      </Box>
      <Box
        sx={{
          height: '50%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
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
          textAlign: 'center',
        }}
      >
        Height 50%
      </Box>
      <Box
        sx={{
          height: '75%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
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
          textAlign: 'center',
        }}
      >
        Height 75%
      </Box>
      <Box
        sx={{
          height: '100%',
          width: 120,
          display: 'inline-block',
          p: 1,
          mx: 1,
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
          textAlign: 'center',
        }}
      >
        Height 100%
      </Box>
    </Box>
  );
}

function SpacingDemo() {
  return (
    <div>
      <Box
        sx={{
          p: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
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
        p: 1
      </Box>
      <Box
        sx={{
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
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
        m: 1
      </Box>
      <Box
        sx={{
          p: 2,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
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
        p: 2
      </Box>
    </div>
  );
}

function HorizontalCentering() {
  return (
    <div>
      <Box
        sx={{
          mx: 'auto',
          width: 200,
          p: 1,
          m: 1,
          border: '1px solid',
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        Centered element
      </Box>
    </div>
  );
}

import Link from '@mui/material/Link';
import { visuallyHidden } from '@mui/utils';

function VisuallyHiddenUsage() {
  return (
    <>
      <Link href="#foo">
        Read more
        {/* always visually hidden because the parent is focusable element */}
        <Box sx={visuallyHidden}>about how to visually hide elements</Box>
      </Link>

      <hr />
      <span>아래는 적용 안함</span>
      <p> 그냥 visuallyHidden 이거 적용하면 안보이는거임...</p>
      <br />
      <Link href="#foo">
        Read more
        {/* always visually hidden because the parent is focusable element */}
        <Box>about how to visually hide elements</Box>
      </Link>
    </>
  );
}

function ExTypography() {
  return (
    <>
      <div>
        <Divider sx={{ fontSize: '1rem', m: '10px' }}>
          Typography 기본형
        </Divider>
        <Box sx={{ typography: 'subtitle2' }}>subtitle2</Box>
        <Box sx={{ typography: 'body1' }}>body1</Box>
        <Box sx={{ typography: 'body2' }}>body2</Box>
      </div>
      <Divider sx={{ fontSize: '1rem', m: '10px' }}>
        Typography Text alignment
      </Divider>
      <Typography component="div">
        <Box sx={{ textAlign: 'justify', m: 1 }}>
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
          sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
        </Box>
        <Box sx={{ textAlign: 'left', m: 1 }}>Left aligned text.</Box>
        <Box sx={{ textAlign: 'center', m: 1 }}>Center aligned text.</Box>
        <Box sx={{ textAlign: 'right', m: 1 }}>Right aligned text.</Box>
      </Typography>

      <Divider
        sx={{
          fontSize: '1rem',
          m: '10px',
          colors: 'red',
          textDecorationColor: 'red',
        }}
      >
        Typography Text transformation
      </Divider>

      <Typography component="div">
        <Box sx={{ textTransform: 'capitalize', m: 1 }}>capitalized text.</Box>
        <Box sx={{ textTransform: 'lowercase', m: 1 }}>Lowercase Text.</Box>
        <Box sx={{ textTransform: 'uppercase', m: 1 }}>Uppercase Text.</Box>
      </Typography>

      <Divider sx={{ fontSize: '1rem', m: '10px' }}>Font weight</Divider>
      <Typography component="div">
        <Box sx={{ fontWeight: 'light', m: 1 }}>Light</Box>
        <Box sx={{ fontWeight: 'regular', m: 1 }}>Regular</Box>
        <Box sx={{ fontWeight: 'medium', m: 1 }}>Medium</Box>
        <Box sx={{ fontWeight: 500, m: 1 }}>500</Box>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>Bold</Box>
      </Typography>

      <Divider sx={{ fontSize: '1rem', m: '10px' }}>Font size</Divider>
      <Typography component="div">
        <Box sx={{ fontSize: 'default', m: 1 }}>Default</Box>
        <Box sx={{ fontSize: 'h6.fontSize', m: 1 }}>h6.fontSize</Box>
        <Box sx={{ fontSize: 16, m: 1 }}>16px</Box>
      </Typography>

      <Divider sx={{ fontSize: '1rem', m: '10px' }}>Font style</Divider>
      <Typography component="div">
        <Box sx={{ fontStyle: 'normal', m: 1 }}>Normal font style.</Box>
        <Box sx={{ fontStyle: 'italic', m: 1 }}>Italic font Style.</Box>
        <Box sx={{ fontStyle: 'oblique', m: 1 }}>Oblique font style.</Box>
      </Typography>

      <Divider sx={{ fontSize: '1rem', m: '10px' }}>Font family</Divider>
      <Typography component="div">
        <Box sx={{ fontFamily: 'default', m: 1 }}>Default</Box>
        <Box sx={{ fontFamily: 'Monospace', fontSize: 'h6.fontSize', m: 1 }}>
          Monospace
        </Box>
      </Typography>
      <Divider sx={{ fontSize: '1rem', m: '10px' }}>Letter spacing</Divider>
      <Typography component="div">
        <Box sx={{ letterSpacing: 6, m: 1 }}>Letter Spacing 6px.</Box>
        <Box sx={{ letterSpacing: 10, m: 1 }}>Letter Spacing 10px.</Box>
      </Typography>

      <Divider sx={{ fontSize: '1rem', m: '10px' }}>Line height</Divider>
      <Typography component="div">
        <Box sx={{ lineHeight: 'normal', m: 1 }}>Normal height.</Box>
        <Box sx={{ lineHeight: 2, m: 1, border: '1px solid blue' }}>
          line-height: 2
        </Box>
      </Typography>
    </>
  );
}

function ThemeUsage() {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        contrastText: 'red',
      },
    },
  });
  const MyThemeComponent = styled('div')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent>Styled div with theme</MyThemeComponent>
    </ThemeProvider>
  );
}

interface MyThemeComponentProps {
  color?: 'primary' | 'secondary';
  variant?: 'normal' | 'dashed';
}

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          color: 'darkslategray',
        },
        primary: {
          color: 'darkblue',
        },
        secondary: {
          color: 'darkred',
          backgroundColor: 'pink',
        },
      },
      variants: [
        {
          props: { variant: 'dashed', color: 'primary' },
          style: {
            border: '1px dashed darkblue',
          },
        },
        {
          props: { variant: 'dashed', color: 'secondary' },
          style: {
            border: '1px dashed darkred',
          },
        },
      ],
    },
  },
});

const MyThemeComponent = styled('div', {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) =>
    prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'MyThemeComponent',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
  ],
})<MyThemeComponentProps>(({ theme }) => ({
  backgroundColor: 'aliceblue',
  padding: theme.spacing(1),
}));

function UsingOptions() {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
        Primary
      </MyThemeComponent>
      <MyThemeComponent sx={{ m: 1 }} color="secondary">
        Secondary
      </MyThemeComponent>
    </ThemeProvider>
  );
}

export default function StyleOther() {
  type typeTitle = { title: string };
  const MyDivider = ({ title }: typeTitle) => {
    return <Divider sx={{ fontSize: '1rem', m: '10px' }}>{title}</Divider>;
  };

  const MyComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
  });

  return (
    <>
      <MyDivider title={'Position'} />
      <ZIndex />
      <MyDivider title={'ShadowsDemo'} />
      <ShadowsDemo />
      <MyDivider title={'Sizing - Values'} />
      <Values />
      <MyDivider title={'Sizing - Width'} />
      <Width />
      <MyDivider title={'Sizing - Height'} />
      <Height />
      <MyDivider title={'Spacing'} />
      <p>
        m - for classes that set margin <br />
        p - for classes that set padding Where sides is one of: <br />
        t - for classes that set margin-top or padding-top <br />
        b - for classes that set margin-bottom or padding-bottom <br />
        l - for classes that set margin-left or padding-left <br />
        r - for classes that set margin-right or padding-right <br />
        x - for classes that set both *-left and *-right <br />
        y - for classes that set both *-top and *-bottom <br />
        blank - for classes that set a margin or padding on all 4 sides of the
        element
        <br />
      </p>
      <MyDivider title={'Transformation'} />
      <a href="https://mui.com/system/spacing/">Transformation</a>
      <MyDivider title={'SpacingDemo'} />
      <SpacingDemo />
      <MyDivider title={'HorizontalCentering'} />
      <HorizontalCentering />
      <MyDivider title={'VisuallyHiddenUsage'} />
      <VisuallyHiddenUsage />
      <MyDivider title={'ExTypography'} />
      <ExTypography />
      <MyDivider title={'Theme - styled()'} />
      <MyComponent>Ex Styled div</MyComponent>

      <MyDivider title={'Theme - Usage'} />
      <ThemeUsage />
      <MyDivider title={'Theme - UsingOptions'} />
      <UsingOptions />
    </>
  );
}
