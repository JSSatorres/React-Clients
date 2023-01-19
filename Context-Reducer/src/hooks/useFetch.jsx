import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
      setLoading(true)     
      axios.get(url)
      .then(res => {
          res.data && setData(res.data.todos)
          setLoading(false)    
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
  }, [url])

  return { data, loading, error }
}
export default useFetch