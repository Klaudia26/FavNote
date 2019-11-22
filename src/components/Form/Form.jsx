import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './Radio';
import AppContext from '../../context';
import styles from './Form.module.scss';

const types = {
  twitter: 'twitter',
  article: 'article',
  note: 'note',
};

const descriptionObj = {
  twitter: 'favortie twitter acount',
  article: 'article',
  note: 'note',
};

class Form extends Component {
  state = {
    type: types.twitter,
    title: '',
    link: '',
    image: '',
    description: '',
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type, title, link, image, description } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <form
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <Title>Add new {descriptionObj[type]}</Title>
              <div className={styles.formOptions}>
                <Radio
                  id={types.twitter}
                  checked={type === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter
                </Radio>
                <Radio
                  id={types.article}
                  checked={type === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </Radio>
                <Radio
                  id={types.note}
                  checked={type === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </Radio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={title}
                name="title"
                label={type === types.twitter ? 'Twitter Name' : 'Title'}
              />
              {type !== types.note ? (
                <Input
                  onChange={this.handleInputChange}
                  value={link}
                  name="link"
                  label={type === types.twitter ? 'Twitter Name' : 'Link'}
                />
              ) : null}

              {type === types.twitter ? (
                <Input
                  onChange={this.handleInputChange}
                  value={image}
                  name="image"
                  label="Image"
                />
              ) : null}
              <Input
                onChange={this.handleInputChange}
                value={description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>Add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
