import { useEffect, useState } from 'react'
import './style.css'

function TagList() {

  const [loadedTags, setTags] = useState(undefined)

  useEffect(() => {
    fetch('https://conduit.productionready.io/api/tags').then(res => {
      res.json().then(({tags}) => {
        setTags(tags)
      })
    })
  }, [])

  if (!loadedTags) return '⏳ Carregando...'

  if (!loadedTags.length) return 'Nao ha tags!'

  return loadedTags.map(tag => (
      <a
        key={tag}
        href="/"
        className="tag-list-a"
      >
        {tag}
      </a>
    )
  )
}

export default TagList
