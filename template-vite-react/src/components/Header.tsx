import { useMantineColorScheme } from '@mantine/core'
import clsx from 'clsx'

function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <header className={clsx('w-screen h-[60px] min-h-[60px] px-[80px] flex justify-between items-center shadow', {
      'shadow-#eee': colorScheme === 'dark',
    })}>
      <Link to="/" className="text-blue-700">
        Vite React
      </Link>
      <button className="icon-btn mx-2 !outline-none">
        <div className={clsx({
          'i-carbon-sun': colorScheme === 'light',
          'i-carbon-moon': colorScheme === 'dark',
        })} onClick={() => toggleColorScheme()} />
      </button>
    </header>
  )
}

export default Header
