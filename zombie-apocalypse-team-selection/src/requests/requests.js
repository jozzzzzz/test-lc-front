import { useState, useEffect } from 'react'

const useUsers = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://reqres.in/api/users')
				const data = await response.json()
				setUsers(data.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		};

		fetchUsers()
	}, [])

	return { users, loading, error }
}

const useUserById = (id) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(`https://reqres.in/api/users/${id}`)
				const data = await response.json()
				setUser(data.data)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchUser()
	}, [id])

	return { user, loading, error }
}

export { useUsers, useUserById }