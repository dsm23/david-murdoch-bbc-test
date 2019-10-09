import React, { FunctionComponent } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_GB';
import 'rc-pagination/assets/index.css';

import PostFormQuery from '../../organisms/post-form-query';

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
      <PostFormQuery urlIndex={urlIndex} />
    </>
  );
};

export default Post;
