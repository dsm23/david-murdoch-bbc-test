import React, { FunctionComponent, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';

import PostForm from '../../molecules/post-form';

import mutateRank from '../../../graphql/mutateRank';

interface Props {
  urlIndex: string;
}

const PostFormMutation: FunctionComponent<Props> = ({ urlIndex }) => {
  const [doMutateRank] = useMutation(mutateRank);

  return (
    <PostForm
      initialValues={{
        rank: 5,
      }}
      onSubmit={async ({ rank }) => {
        try {
          await doMutateRank({
            variables: {
              id: parseInt(urlIndex, 10) - 1,
              rank,
            },
          });
          return true;
        } catch {
          return false;
        }
      }}
    />
  );
};

export default PostFormMutation;
