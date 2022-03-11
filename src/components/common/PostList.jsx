import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'





function PostList() {
    let i = 0;
    const [post , setPost] = useState([]);
    const loadMore = (e) => {
        i = i + 1; 
        if(i < 11){
        var link = 'https://jsonplaceholder.typicode.com/posts?userId=' + i;
        axios.get(link)
        .then(response => {
            const newPost = [];
            setPost(oldPost => [...oldPost,  ... response.data]);
        } )
        .catch(error =>{
            console.log(error)
        })
    }
    };
    const handleScroll =(e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
            loadMore(+1);
        }
        }
    useEffect(() => {
        loadMore();
        window.addEventListener('scroll', handleScroll);
    }, [])


    
    return (
      <div class="Post-list ml-4 mr-4">
          {
              post.length ?
              post.map(post => <div className="p-4 m-3 shadow-lg hover:shadow-2xl duration-500	hover:cursor-pointer" key={post.id}> 
              <h3 className="mb-2 text-xl font-semibold	">{post.title}</h3>
              <p className="mb-2">{post.body}</p>
              </div>) : null
          }
      </div>
    )
}

export default PostList