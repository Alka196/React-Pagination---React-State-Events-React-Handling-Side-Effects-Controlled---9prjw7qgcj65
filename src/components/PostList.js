import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/fetchPosts'
import { Post } from './Post'
import { PaginationButtonsList } from './PaginationButtonsList'



const PostList = () => {

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetchPosts(page, 5).then(dat =>{
            setData(dat)
            setLoading(false)
        })
    },[page])

    const handleNextPage = (val) => {
        setPage(val)
    }
    
    return (
        <>
            <div className='post-list'>
                {
                    loading ?
                        <div className='loader'>Loading...</div>
                        : data.map(post => <Post body={post.body} title={post.title} key={post.id}/>)
                }
            </div>
            <PaginationButtonsList handler={handleNextPage}/>
        </>
    )
}

export { PostList }