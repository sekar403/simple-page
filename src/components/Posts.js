import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'



export const Posts = () => {
  const [post, setPost] = useState([]);
  const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

  const getPosts = async (id) => {
    try {
      const api = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const { data } = await axios.get(api);
      setPost(data)
    } catch (error) {
      console.error(error.message)
    }

  }

  // use it without sideeffects
  useEffect(() => {
    getPosts(id);
  }, [])

  return (
    <div className='container mx-auto max-w-6xl	 pr-3 pl-3' >
      <div className="p-4 m-3 shadow-lg hover:shadow-2xl duration-500	hover:cursor-pointer" key={post.id}>
        <h1 className="capitalize mb-2 text-xl font-semibold	">{post.title}</h1>
        <p classNamer="mb-2">{post.body}</p>
      </div>

    </div>
  )
}
