"use client"

import Link from "next/link"

export default function NavbarTop() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={`/`} className="btn btn-ghost normal-case text-xl">Arralin</Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto input-sm" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link href={`/profile`} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link href={`/settings`}>Settings</Link></li>
            <li><Link href={`/api/auth/signout`}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}