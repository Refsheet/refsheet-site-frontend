import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql} from '@apollo/client/react/hoc'
//graphql.macro
import Error from '../Shared/Error'
import View from './show/View'
import Loading from '../Shared/views/Loading'

const getForum = require('./getForum.graphql');

class Forum extends Component {
  render() {
    const {data} = this.props

    if (data.loading) {
      return <Loading/>
    } else if (data.error) {
      const message = data.error.graphQLErrors.map(e => e.message).join(', ')
      return <Error message={message}/>
    } else {
      return <View forum={data.getForum} {...this.state} />
    }
  }
}

Forum.propTypes = {}

export default graphql(getForum, {
  options: props => ({
    variables: props.match.params,
    errorPolicy: 'all',
  }),
})(Forum)
