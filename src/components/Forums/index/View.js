import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Main from '../../Shared/Main'
import {StickyContainer} from 'react-sticky'
import {Col, Container, Row} from 'react-materialize'
import Jumbotron from '../../Shared/Jumbotron'
import {Link} from 'react-router-dom'
import Error from '../../Shared/Error'

class View extends Component {
  render() {
    const {forums} = this.props


  }
}

export const forumType = PropTypes.shape({
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string,
  description: PropTypes.string,
  system_owned: PropTypes.bool,
  rules: PropTypes.string,
  prepost_message: PropTypes.string,
  open: PropTypes.bool,
})

View.propTypes = {
  forums: PropTypes.arrayOf(forumType),
}

export default View
