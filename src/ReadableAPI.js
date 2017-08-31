const api = "http://localhost:5001"; 

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

export const getCategory = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => console.log("getCategory", data)) 

export const getPost= () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data.posts)

export const getCategoryPosts = () =>
    fetch(`${api}/category/posts`, { headers })
      .then(res => res.json())
      .then(data => data.getByCategory)

export const getComments = () =>
      fetch(`${api}/comments`, { headers })
        .then(res => res.json())
        .then(data => data.comments)

