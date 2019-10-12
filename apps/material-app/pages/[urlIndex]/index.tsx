import React from 'react';
import { useRouter } from 'next/router';

export const Post = () => {
  const router = useRouter();
  const { urlIndex } = router.query;

  return <div>post/{urlIndex}</div>;
};

export default Post;
