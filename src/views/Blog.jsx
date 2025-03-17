import React from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
function Blog() {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = useParams()
  const blogId = params.blogId
  console.log(searchParams.get('filter'))
  return (
    <>
   Blog id = {blogId}   <br />

   <button type='button' onClick={()=>{setSearchParams({filter:"active",id:`${blogId}`})}}>Aktif uyeler</button>
   <button type='button' onClick={()=>{setSearchParams()}}>Tum uyeler</button>
  
    </>
  )
}

export default Blog
