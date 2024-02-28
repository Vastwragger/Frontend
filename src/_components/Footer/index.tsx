import React from 'react'
import Link from 'next/link'

// import { Footer } from '../../../payload/payload-types'
// import { fetchFooter, fetchGlobals } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'

export async function Footer() {
  let footer: any | null = null


  const navItems = footer?.navItems || []

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <picture>
          <img
              className={classes.logo}
              alt="Payload Logo"
              src="/logo.jpg"
            />
          </picture>
        </Link>
        <nav className={classes.nav}>
          <ThemeSelector />
          <Link href="/admin">Admin</Link>
        </nav>
      </Gutter>
    </footer>
  )
}
