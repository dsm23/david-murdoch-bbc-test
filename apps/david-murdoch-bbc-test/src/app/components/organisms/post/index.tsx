import React, { FunctionComponent } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_GB';
import 'rc-pagination/assets/index.css';
import { Mutation, Query } from 'react-apollo';

import Article from '../../molecules/article';
import PostForm from '../../molecules/post-form';

import getArticle from '../../../graphql/getArticle';
import mutateRank from '../../../graphql/mutateRank';

const Post: FunctionComponent<{}> = () => {
  const { urlIndex } = useParams();
  const history = useHistory();

  const onChange = value => history.push(`/${value}`);
  return (
    <>
      <Pagination
        onChange={onChange}
        current={parseInt(urlIndex, 10)}
        total={5}
        pageSize={1}
        locale={localeInfo}
      />
      <Query query={getArticle} variables={{ id: parseInt(urlIndex, 10) - 1 }}>
        {({ data, loading, error, client }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <p>ERROR: {error.message}</p>;
          return (
            data &&
            data.article && (
              <>
                <Article {...data.article} client={client} />
                <Mutation mutation={mutateRank}>
                  {mutateRank => (
                    <PostForm
                      initialValues={{
                        rank: 5,
                      }}
                      onSubmit={async ({ rank }) => {
                        try {
                          await mutateRank({
                            variables: {
                              id: urlIndex - 1,
                              rank,
                            },
                          });
                          return true;
                        } catch {
                          return false;
                        }
                      }}
                    />
                  )}
                </Mutation>
              </>
            )
          );
        }}
      </Query>
    </>
  );
};

export default Post;
