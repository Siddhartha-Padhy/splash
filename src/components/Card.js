function Card(props) {
  return (
    <div className="flex flex-wrap justify-center">
      {props.images.map((image) => (
        <div
          className="rounded p-1 bg-white m-1 hover:bg-red-600 transition duration-150 ease-in"
          key={props.images['id']}
        >
          {props.images !== '' ? (
            <img
              src={image['download_url']}
              className="rounded cursor-pointer"
              alt="uploads"
              style={{ height: props.images[0]['height'] % 500 }}
            />
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}

export default Card
