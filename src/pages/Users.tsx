import { useState } from 'react'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'

interface User {
  id: number
  name: string
  email: string
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ])

  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState<User | null>(null)
  const [form, setForm] = useState({ name: '', email: '' })

  const openAdd = () => {
    setEditing(null)
    setForm({ name: '', email: '' })
    setModalOpen(true)
  }

  const openEdit = (user: User) => {
    setEditing(user)
    setForm({ name: user.name, email: user.email })
    setModalOpen(true)
  }

  const saveUser = () => {
    if (editing) {
      setUsers(users.map(u => (u.id === editing.id ? { ...editing, ...form } : u)))
    } else {
      const newUser: User = { id: Date.now(), name: form.name, email: form.email }
      setUsers([...users, newUser])
    }
    setModalOpen(false)
  }

  const deleteUser = (id: number) => setUsers(users.filter(u => u.id !== id))

  return (
    <div>
      <div className="mb-4 text-right">
        <Button onClick={openAdd}>Add User</Button>
      </div>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2 space-x-2">
                <Button className="bg-gray-500" onClick={() => openEdit(u)}>
                  Edit
                </Button>
                <Button className="bg-red-500" onClick={() => deleteUser(u.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-lg font-bold mb-2">{editing ? 'Edit User' : 'Add User'}</h2>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            className="border p-2 w-full"
          />
        </div>
        <div className="mt-4 text-right space-x-2">
          <Button className="bg-gray-500" type="button" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={saveUser}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  )
}
