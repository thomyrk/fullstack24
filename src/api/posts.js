export const getPosts = async (queryParams) => {
  console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL) // Debugging
  console.log(
    'Backend URL:',
    `${import.meta.env.VITE_BACKEND_URL}/posts?` +
      new URLSearchParams(queryParams),
  ) // Debugging
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts?` +
      new URLSearchParams(queryParams),
  )
  // const res = await fetch(
  //   'http://52.192.245.131:3001/api/v1/posts?' +
  //     new URLSearchParams(queryParams),
  // )

  return await res.json()
}

export const createPost = async (post) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  })
  return await res.json()
  //   const res = await fetch('http://52.192.245.131:3001/api/v1/posts', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(post),
  //   })
  //   return await res.json()
}

export const deletePost = async (post) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts/${post._id}`,
    {
      method: 'DELETE',
    },
  )
  return await res.json()
}
