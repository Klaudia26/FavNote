import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticleView from './ArticleView/ArticleView';
import AppContext from '../../context';
import NotesView from './NotesView/NotesView';
import TwitterView from './TwitterView/TwitterView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import './index.css';

class Root extends Component {
  state = {
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElement = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElement}>
          <>
            <Header openModalFn={this.openModal} />
            <Switch>
              <Route exact path="/" component={TwitterView} />
              <Route path="/articles" component={ArticleView} />
              <Route path="/notes" component={NotesView} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
