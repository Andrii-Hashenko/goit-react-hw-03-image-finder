import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { createPortal } from 'react-dom';

import { Overlay, ImageModal } from './Modal.styled.js';


export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
    
  }
  handleKeyDown = e => {
    
    if (e.code === 'Escape') {
      
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    
    const modalRoot = document.getElementById('root');
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ImageModal>{this.props.children}</ImageModal>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};
