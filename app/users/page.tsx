'use client'

import { useEffect, useState } from 'react'

type User = {
  id: number
  email: string
  name: string | null
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  async function fetchUsers() {
    const res = await fetch('/api/users')
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  async function createUser() {
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    })

    setEmail('')
    setName('')
    fetchUsers()
  }

  async function deleteUser(id: number) {
    await fetch(`/api/users/${id}`, {
      method: 'DELETE',
    })

    fetchUsers()
  }

  async function updateUser(id: number) {
    const newName = prompt('Enter new name')
    if (!newName) return

    await fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName }),
    })

    fetchUsers()
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Users CRUD</h1>

      <div style={{ marginBottom: 20 }}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={createUser}>Add User</button>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} - {user.name}
            <button onClick={() => updateUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
