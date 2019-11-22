import React from 'react';
import Context from '../../../context';
import List from '../../../components/List/List';

const ArticleView = () => (
  <>
    <Context.Consumer>
      {(context) => <List items={context.article} />}
    </Context.Consumer>
  </>
);

export default ArticleView;
