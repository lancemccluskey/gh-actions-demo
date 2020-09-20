/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = () => {
  console.log('Nav');
  return (
    <header sx={{ variant: 'containers.header' }}>
      <nav sx={{ variant: 'containers.nav' }}>
        <Link href="/">
          <a sx={{ variant: 'containers.aHome' }}>Home</a>
        </Link>
        <Link href="/facts">
          <a sx={{ variant: 'containers.a' }}> Facts</a>
        </Link>
        <Link href="/jokes">
          <a sx={{ variant: 'containers.a' }}> Jokes</a>
        </Link>
        <Link href="/pics">
          <a sx={{ variant: 'containers.a' }}> Pics</a>
        </Link>
        <Link href="/quotes">
          <a sx={{ variant: 'containers.a' }}> Quotes</a>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
