import {subscribe} from '@refsheet/services/ApplicationService'
//graphql.macro
const getNotifications = require('./getNotifications.graphql');
const subscribeToNotifications = require('./subscribeToNotifications.graphql');

const mapDataToProps = ({getNotifications = {}}) => ({
  notifications: getNotifications.notifications,
  unreadCount: getNotifications.unreadCount,
})

const updateQuery = (prev, data) => {
  const {newNotification} = data

  const notifications = [
    newNotification,
    ...prev.getNotifications.notifications.filter(
      n => n.id !== newNotification.id
    ),
  ]

  const unreadCount = notifications.filter(n => n.is_unread).length

  return {
    ...prev,
    getNotifications: {
      ...prev.getNotifications,
      unreadCount,
      notifications,
    },
  }
}

export default subscribe({
  query: getNotifications,
  subscription: subscribeToNotifications,
  mapDataToProps,
  updateQuery,
})
