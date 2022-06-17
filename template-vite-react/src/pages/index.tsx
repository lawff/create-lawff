import { Button, Input } from '@mantine/core'

function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  return (

    <>
      <main className="px-4 py-10 ml-20 text-gray-700 dark:text-gray-200">
        <div className="text-4xl">
          <div className="i-carbon-notification inline-block" />
        </div>
        <em className="text-sm opacity-75">描述: template vite react</em>

        <div className="py-4" />

        <Input
          className="w-300px mb-10px"
          icon={<div className="i-carbon-user-identification" />}
          placeholder="what's your name?"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <Button onClick={() => {
          if (!name) return
          navigate(`/hi/${encodeURIComponent(name)}`)
        }}>
          确认
        </Button>
      </main>
    </>
  )
}

export default Home
