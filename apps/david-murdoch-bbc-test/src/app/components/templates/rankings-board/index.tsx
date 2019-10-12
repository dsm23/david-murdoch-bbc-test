import React, { FunctionComponent, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Headline } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';

import SubscribedTable from '../../molecules/subscribed-table';

import getRankings from '../../../graphql/getRankings';
import rankSubscription from '../../../graphql/subscribeToRank';

const RankingsBoard: FunctionComponent<{}> = () => {
  const { data, error, loading, subscribeToMore } = useQuery(getRankings);

  useEffect(() => {
    subscribeToMore({
      document: rankSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        const newArticle = subscriptionData.data.rankChanged;

        const replaceIndex = newArticle.id;

        return {
          articles: prev.articles.map((item, index) => {
            if (index !== replaceIndex) {
              return item;
            }
            return newArticle;
          }),
        };
      },
    });
  }, [subscribeToMore]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <p>ERROR: {error.message}</p>
  ) : (
    data && (
      <>
        <Headline script={latin} service="news">
          Rankings Board
        </Headline>

        <SubscribedTable articles={data.articles} />
      </>
    )
  );
};

export default RankingsBoard;
