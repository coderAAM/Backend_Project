import React from 'react'
import axios from 'axios'

const CreatePost = () => {

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            try {
                const response = await axios.post('http://localhost:3000/posts-create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                alert('Post successfully')
                // console.log(response.data);
            } catch (error) {
                console.error("Error creating post:", error);
            }
        }
  return (
    <section className='create-post-section'>
          <a href="/feed">View Post</a>
        <h1 className='create-post-title'>Create New Post</h1>

        <form className='create-post-form' onSubmit={handleSubmit}>
            <input type="file" name="image" accept='image/*' />
            <input type="text" name='caption' required placeholder='Enter the caption' />
            <button>Submit</button>
        </form>

    </section>
  )
}

export default CreatePost
