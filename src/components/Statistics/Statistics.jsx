// import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { List, Item } from './Statistic.styled';

export function Statistics ({good , neutral , bad , positivePercentage , total}) {
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li >
        <li>Positive feedback: {positivePercentage()}%</li>
      </ul>
    );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};