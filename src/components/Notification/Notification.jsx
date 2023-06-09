// import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Message } from './Notification.styled';

export function Notification ({message}){
    return (
      <>
        <p>{message}</p>
      </>
    );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};