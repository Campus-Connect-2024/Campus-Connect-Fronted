import React, { useEffect, useState } from 'react'
import { PostCard, ShowPostCard } from '../../Components';
import { apiClient } from '../../lib/api-client';
import { GET_ALL_POSTS } from '../../utils/constants';

const PostPage = () => {

const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const allPosts = await apiClient.get(GET_ALL_POSTS, {
          withCredentials: true,
        });

        if (allPosts) {
          setLoading(false);
          setPosts(allPosts.data.data.posts);
        }
       
      } catch (err) {
        setError(true);
        setLoading(false);
        console.log("post_error: ", err);
      }
    })();
  }, []);

  return (
    <div className='w-full'>
        <PostCard/>
        {
            posts.map((post) => <ShowPostCard key={post._id} post={post} />)
        }
    </div>
  );
}

export default PostPage