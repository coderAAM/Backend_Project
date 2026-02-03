import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

  const [post, setPost] = useState([
    {
      _id: 1,
      image: "https://picsum.photos/500/300?random=1",
      caption: "Beautiful random image 🌄"
    },
    {
      _id: 2,
      image: "https://picsum.photos/500/300?random=2",
      caption: "Another random post 📸"
    }
  ])

  useEffect(() => {
    axios.get('http://localhost:3000/post')
      .then(res => {
        //console.log(res.data);
        
        setPost(res.data.posts)
      })
  }, [])

  return (
    <section className='Feed-posts'>
      <a href="/">Back</a>
      <h1>Feed Post</h1>

      <div className='Feed-container'>
        {post.length > 0 ? (
          post.map((item) => (
            <div key={item._id} className='Feed-post-item'>
              <img
                src={item.image}
                alt={item.caption}
                className='Feed-post-image'
              />
              <p className='Feed-post-caption'>{item.caption}</p>
            </div>
          ))
        ) : (
          <h2 className='Feed-no-posts'>No posts available</h2>
        )}
      </div>

    </section>
  )
}

export default Feed
