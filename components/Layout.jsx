import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const Layout = ({ children, title = 'This is the default title' }) => (<div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>
    <header>
      <nav>
        <Link href="/Home">
        </Link>{'\r'}
        <Link href="/about">{'\r'}
         
        </Link>{'\r'}
        
        
        <Link href="/api/users">Users API</Link>{'\r'}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Im here to stay (Footer)</span>{'\r'}
    </footer>
  </div>);
export default Layout;
