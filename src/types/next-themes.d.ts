declare module 'next-themes' {
  import type { ReactNode, ComponentType } from 'react'

  export interface ThemeProviderProps {
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    children?: ReactNode
  }

  export const ThemeProvider: ComponentType<ThemeProviderProps>

  export function useTheme(): {
    theme?: string
    setTheme: (theme: string) => void
    resolvedTheme?: string
    systemTheme?: string
  }
}


