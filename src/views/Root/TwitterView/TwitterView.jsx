import React from 'react';
import Context from '../../../context';
import List from '../../../components/List/List';

const TwitterView = () => (
  <>
    <Context.Consumer>
      {(context) => <List items={context.twitter} />}
    </Context.Consumer>
  </>
);

export default TwitterView;
