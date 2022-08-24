import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-800 py-1 px-1 relative shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            src="https://picsum.photos/id/1025/50/50"
            alt="brand-logo"
            className="rounded-full my-1"
          />
          <div className="mx-2">
            <strong className="text-red-600">Andrew Alfred</strong>
            <br />
            <span>Technical advisor</span>
          </div>
        </div>
        <div className="my-auto mx-5">
          <ul className="flex flex-row space-x-2 my-auto text-white">
            <li>
              <Link
                to="/"
                className="transition ease-in-out delay-80 hover:text-red-500 mx-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500 mx-1">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
