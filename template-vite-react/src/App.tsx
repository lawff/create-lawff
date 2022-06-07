import { Suspense } from 'react'
import type { ColorScheme } from '@mantine/core'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'

import routes from '~react-pages'
import NPLoading from '~/modules/nprogress'
import Header from '~/components/Header'

const App = () => {
  // TODO: 初始化时候 colorSchema
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  const toggleColorScheme = (value?: ColorScheme) => {
    if (value === 'dark' || colorScheme === 'light')
      document.documentElement.classList.add('dark')

    else
      document.documentElement.classList.remove('dark')

    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        emotionOptions={
          { key: 'template-vite-react' }
        }
      >
        <Header />
        <Suspense fallback={<NPLoading />}>
          {useRoutes(routes)}
        </Suspense>

      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default App
