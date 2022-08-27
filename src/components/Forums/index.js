import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {graphql} from '@apollo/client/react/components'
//graphql.macro
import Error from '../Shared/Error'
import View from './index/View'
import Loading from '../Shared/views/Loading'

const getForums = require('./getForums.graphql');

class Forums extends Component {
  render() {
    const {data} = this.props

    if (data.loading) {
      return <Loading/>
    } else if (data.error) {
      const message = data.error.graphQLErrors.map(e => e.message).join(', ')
      return <Error message={message}/>
    } else {
      return <View forums={data.getForums} {...this.state} />
    }
  }
}

Forums.propTypes = {}

export default graphql(getForums, {
  options: props => ({
    variables: props.match.params,
  }),
})(Forums)
