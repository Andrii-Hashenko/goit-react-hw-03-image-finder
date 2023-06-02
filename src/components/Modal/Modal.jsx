import React, { Component } from 'react';
import PropTypes from 'prop-types';

// імпортуем метод для створення портала для модалки
import { createPortal } from 'react-dom';
// import './Modal.styled.js';
import { Overlay, ImageModal } from './Modal.styled.js';
// вибираємо по селектору айди
const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
    // console.log('почистили едвенлістенер');
  }
  handleKeyDown = e => {
    // console.log(e.code)
    if (e.code === 'Escape') {
      // console.log('нажали на ескейп, потрібно закрити модалку');
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    // console.log('клікнули в бекдроп');
    // якщо клікнути в біле поле (текст параграф, то подія спливе до бекдропа і там ми її відловимо
    // нам треба відрізняти - де ми клікнули саме в бекдроп, а де у вкладені елементи під бекдропом
    // для цього є карент таргет -(на чому зловили подію) і таргет- (на що ми клацнули))
    // console.log( 'куди тицьнули' , e.target);
    // console.log('де зловили подію', e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    //   визиваємо метод криейтпортал и передаемо йому разметку модалки, яку треба зарендерить та другим аргументом -
    // квериселектор - куди треба цю модалку зарендерить
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
