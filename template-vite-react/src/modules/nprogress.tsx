import NProgress from 'nprogress'

const NPLoading = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
        NProgress.done()
    }
  })

  return null
}

export default NPLoading
