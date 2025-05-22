import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex h-screen">
      <aside className="w-48 bg-gray-100 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'font-bold' : ''}
            >
              Home
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}
