'use client'

import React from 'react'
import Link from 'next/link'
import { CartLink } from '../../CartLink'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: any }> = ({ header }) => {
  const navItems = header?.navItems || []
  let user = true;

  return (
    <nav
      className={[
        classes.nav,
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && classes.hide,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <React.Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account">Create Account</Link>
        </React.Fragment>
      )}
    </nav>
  )
}
