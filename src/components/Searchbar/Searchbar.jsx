import { Component } from 'react';
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
  
  handleNameChange = event => {
    
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.searchImage.trim() === '') {
      

      toast.error('Please enter your query');
      return;
    }
    this.props.inSubmit(this.state.searchImage);
    
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
