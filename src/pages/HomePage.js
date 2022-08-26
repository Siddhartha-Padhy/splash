import '../App.css'
import Card from '../components/Card'
import { useEffect, useState } from 'react'

function HomePage() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

  function getImages() {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=35`)
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        setImages(data)
        console.log(data)
      })
  }

  useEffect(() => {
    getImages()
  }, [page])

  return (
    <div className="HomePage">
      <div className="bg-rose-700 justify-center p-2">
        <Card images={images} />
        <div className="rounded p-1 bg-slate-800 m-1 text-center">
          <button
            className="bg-cyan-600 rounded p-1 px-2 m-1"
            onClick={() => {
              if (page > 1) setPage(page - 1)
            }}
          >
            Prev
          </button>
          <span className="bg-white p-1 px-2 rounded mx-3">{page}</span>
          <button
            className="bg-cyan-600 rounded p-1 px-2 m-1"
            onClick={() => {
              setPage(page + 1)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
