import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-slate-700 py-1 px-1 relative shadow-lg">
      <div className="flex justify-between">
        <div className="flex items-center mx-2">
          <img
            src="https://picsum.photos/id/237/50/50"
            alt="brand-logo"
            className="rounded-full my-1"
          />
          <div className="mx-2">
            <strong className="text-red-600">Splash 📷</strong>
            <br />
            <span className="text-white">Photography</span>
          </div>
        </div>
        <div className="my-auto mx-5">
          <ul className="flex flex-row space-x-2 my-auto text-white">
            <li>
              <Link
                to="/"
                className="transition ease-in-out delay-80 hover:text-rose-700 mx-1"
              >
                <i class="fa fa-home" aria-hidden="true"></i>&nbsp; Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-rose-700 mx-1">
                <i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp; About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
