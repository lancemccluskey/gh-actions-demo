import { roboto } from '@theme-ui/presets';

const theme = {
  ...roboto,
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      flexBasis: '50%',
      p: 2,
      display: 'flex',
      flexDirection: 'column'
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      display: 'flex',
      justifyContent: 'center',
      my: 2,
      mx: 'auto',
    },
    header: {
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%',
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    a: {
      color: 'text',
      fontSize: 3,
      cursor: 'pointer',
    },
    aHome: {
      fontWeight: 'bold',
      fontSize: 4,
      cursor: 'pointer',
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
