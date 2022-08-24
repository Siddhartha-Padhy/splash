import '../App.css'
import Card from '../components/Card'
import { useEffect, useState } from 'react'

function HomePage() {
  const [images, setImages] = useState([])

  function getImages() {
    fetch('https://picsum.photos/v2/list?page=1&limit=35')
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
  }, [])

  return (
    <div className="HomePage">
      <div className="bg-sky-700 justify-center p-2">
        <Card images={images} />
        <div className="rounded p-1 bg-slate-800 m-1 text-center">
          <button className="bg-orange-600 rounded px-2 m-1">Prev</button>
          <button>Curr</button>
          <button className="bg-orange-600 rounded px-2 m-1">Next</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
