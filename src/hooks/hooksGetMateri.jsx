import axios from 'axios'
import {useState, useEffect} from 'react'

const useGetMateri = () => {

  const [materi, setMateri] = useState([])
  const [loading, setloading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        setloading(true)
        const response = await axios.get(
          'https://api-dev.nusalms.com/v1/course?page=0&pageSize=10',
          {
            headers: {
              Authorization:'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NjQ0YzFiLTBhZWEtNDAzNi1iMWVlLTFmZjVkM2JhZjhlNCIsImZ1bGxOYW1lIjoiRGFuaSBUZXN0aW5nMTExIiwidXNlcm5hbWUiOiJkYW5pdGVzdGluZzEyMyIsImVtYWlsIjoiaW1waWNoaXNtYXkxNEBnbWFpbC5jb20iLCJSb2xlSWQiOiI0ZjFlZmQ0NC05OTE5LTQ0YTgtODljYS0zMjMyNGM4MTA0OTYiLCJEaXZpc2lvbklkIjoiZDFmNTRhODItMzhhYS00ZGM3LWJlYzctOTIwYjQyNTU0M2IwIiwiQ29tcGFueUlkIjoiNzg3NGYwOGItMjVlMS00N2M3LWEzYTktNDhkMzEyOGJlOWRkIiwic3RhdHVzIjoiQWN0aXZlZCIsImlzRmlyc3RUaW1lIjpmYWxzZSwiaWF0IjoxNzE3NTYxMDExLCJleHAiOjIzMjIzNjEwMTF9.3xkY_Avvv4oBbAKknjj6bX9n_mxf9z8eYtxtkJk1mJk',
              
            }}

        )
        
        setMateri(response.data.data)
        //console.log('cek', response.data)
    } catch (error) {
        console.log(error)
        setError(error.message)
    } finally {
        setloading(false)
  }
}
fetchMateri()
}, [])

console.log(materi)
return {materi, loading, error}
}

export default useGetMateri