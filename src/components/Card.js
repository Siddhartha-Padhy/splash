function Card(props) {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
      {props.images.map((image) => (
        <div
          className="rounded p-1 bg-white m-1 hover:bg-slate-600 transition duration-150 ease-in"
          key={image['id']}
          style={{ height: 'max-content' }}
        >
          {image !== '' ? (
            <img
              src={image['download_url']}
              className="rounded cursor-pointer w-full"
              alt="uploads"
              style={{
                maxHeight: 400,
              }}
            />
          ) : (
            ''
          )}

          <div className="flex justify-between">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1 hover:bg-cyan-600">
              #{image['author']}
            </span>
            <a
              href={image['download_url']}
              className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1 hover:bg-green-800 transition duration-100 ease-in hover:text-white cursor-pointer"
            >
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
