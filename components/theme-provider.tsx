'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

// Extend ThemeProviderProps to include children explicitly
import type { PropsWithChildren } from 'react'
// Wrap next-themes provider and include children via PropsWithChildren
export function ThemeProvider(
  props: PropsWithChildren<ThemeProviderProps>
) {
  const { children, ...rest } = props
  return <NextThemesProvider {...rest}>{children}</NextThemesProvider>
}
