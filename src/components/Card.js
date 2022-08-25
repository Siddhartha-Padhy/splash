function Card(props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {props.images.map((image) => (
        <div
          className="rounded p-1 bg-white m-1 hover:bg-red-600 transition duration-150 ease-in"
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
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
              #{image['author']}
            </span>
            <span className="inline-block bg-green-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-1">
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
