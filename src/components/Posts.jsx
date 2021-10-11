import React, { useContext, useEffect, useState } from 'react';
import { getPosts } from '../api/posts';
import { UserContext } from './UserContext';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const isAuthed = useContext(UserContext);
  const filteredPosts = posts.filter(post => post.title.includes(searchValue));

  useEffect(() => {
    getPosts(res => setPosts(res.data.posts), console.error)
  }, [getPosts]);

  return (<div>
    <input type="text" onChange={e => setSearchValue(e.target.value)} />
    <ul>
      {filteredPosts.map(post => {
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
    </div>
  )
}