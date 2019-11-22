import React from 'react';
import Context from '../../../context';
import List from '../../../components/List/List';

const NotesView = () => (
  <>
    <Context.Consumer>
      {(context) => <List items={context.note} />}
    </Context.Consumer>
  </>
);

export default NotesView;
