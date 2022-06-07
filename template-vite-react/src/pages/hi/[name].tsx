import { Button } from '@mantine/core'

function Hi() {

  const { name } = useParams();
  const navigate = useNavigate()

  return (
    <div className="px-4 py-10 ml-20 text-gray-700 dark:text-gray-200">
      <p className="mb-10">Demo of dynamic route</p>
      <p className="text-2xl">Hello, { name }.</p>
      <Button className="my-3" onClick={() => {navigate(-1)}}>
        返回
      </Button>
    </div>
  );
}

export default Hi
