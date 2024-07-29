import { useState, useEffect } from 'react'

const useUsers = () => {
  const [users, setUsers] = useState([])
  console.log('useUsers')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        setUsers(data.data)
      } catch (error) {
        const message = error.message
        console.log(message)
      } 
    };

    fetchUsers()
  }, [])

  return { users }
};

export default useUsers