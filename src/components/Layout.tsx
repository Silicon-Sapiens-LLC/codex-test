import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-60 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-gray-700">Admin</div>
        <ul className="flex-1 p-4 space-y-2">
          <li>
            <Link
              to="/"
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${location.pathname === '/' ? 'bg-gray-700' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${location.pathname.startsWith('/dashboard') ? 'bg-gray-700' : ''}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className={`block px-3 py-2 rounded hover:bg-gray-700 ${location.pathname.startsWith('/users') ? 'bg-gray-700' : ''}`}
            >
              Users
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  )
}
