// import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Title, SectionDiv } from './Section.styled';

export function Section ({ title , children }) {
    return (
      <div>
        <p>{title}</p>
        {children}
      </div>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};