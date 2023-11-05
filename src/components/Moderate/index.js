import React, {Component} from 'react'
import View from './View'
import {Error} from 'components/Shared'
import {Query} from '@apollo/client/react/components'
//graphql.macro
import Loading from 'v1/shared/Loading'

const getNextModeration = require('@refsheet/graph/queries/getNextModeration.graphql');

class Moderate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props

    if (data.loading) {
      return <Loading/>
    } else if (data.error) {
      const message = data.error.graphQLErrors.map(e => e.message).join(', ')
      return <Error message={message}/>
    } else {
      return (
        <View moderation={data.getNextModeration} {...data} {...this.state} />
      )
    }
  }
}

const Queried = props => (
  <Query query={getNextModeration} pollInterval={3000}>
    {data => <Moderate {...props} {...data} />}
  </Query>
)

export default Queried
