import { Component } from 'react';
// import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import './Searchbar.styled.js';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
export default class SearchBar extends Component {
  state = {
    searchImage: '',
  };
  // обновляє стейт при кожному нажатии в инпуті
  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    // при сабміті нашої форми визиваємо метод із АРР (хендлформсабмит), який сюди передався як проп
    // імя пропа може бути яке завгодно, я назвала інсабміт
    // проверяем, если в форму ничего не ввели, или там просто пробелі (метод трим)
    // то ми просто виходимо з цього метода і не самбітимо форму
    if (this.state.searchImage.trim() === '') {
      // console.log('пусто');

      toast.error('Please enter your query');
      return;
    }
    this.props.inSubmit(this.state.searchImage);
    // очищаем стейт зразу після сабміта форми
    // this.setState({ searchImage: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}
SearchBar.propTypes = {
  searchImage: PropTypes.string,
};
