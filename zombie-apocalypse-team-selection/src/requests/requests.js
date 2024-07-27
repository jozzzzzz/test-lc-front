import { useState, useEffect } from 'react'

const useUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users')
        const data = await response.json()
        setUsers(data.data)
      } catch (error) {
        // ctach error
      } 
    };

    fetchUsers()
  }, [])

  return { users }
};

export default useUsers