import React, { useContext, useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import { UserContext } from './UserContext';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const isAuthed = useContext(UserContext);

  useEffect(() => {
    getPosts(res => setPosts(res.data.posts), console.error)
  }, [getPosts]);

  return (
    <ul>
      {posts.map(post => {
        console.log(post)
        return ( 
          <li key={`${post.author._id}_${post.createdAt}`}>
            {isAuthed && post.author._id} 
            <p>Location: {post.location}</p>
            <p>Created by: {post.author.username}</p>
            <p>Created at: {post.createdAt}</p>
            <h2>{post.title}</h2>
            <h3>Description: {post.description}</h3>
            <p>Price: {post.price}</p>
          </li>
        );
      })}
    </ul>
  )
}