import { Button, Center } from '@mantine/core'

function NotMatch() {
  const navigate = useNavigate()

  return (
    <Center className="w-screen h-[calc(100vh-60px)]">
      <main p="x4 y10" text="center dark:gray-200">
        <div className="text-4xl">
          <div className="i-carbon-warning inline-block" />
        </div>
        <p className="text-3xl">404 | Not found</p>
        <Button className="m-3" onClick={() => { navigate(-1) }}>
          返回
        </Button>
      </main>
    </Center>
  )
}

export default NotMatch
