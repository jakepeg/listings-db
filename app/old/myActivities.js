import ActivityList from './activityList'
import { getActivities } from '../actions'

const MyActivities = (props) => {

  const filterActivities = activities => {
    return activities.filter((a) => {
      return a.userId && a.userId.includes('google-oauth2|101810273024241340954')
    })
  }

  return (
    <div className="contain home-page">

      <div className="rowz">
        <h2>My Activities</h2>
      </div>

      <div className="rowz">
        <ActivityList activities={filterActivities(props.activities) || []} />
      </div>
    </div>
  )
}

MyActivities.getInitialProps = async () => {
    const activities = await getActivities()
    return {
      activities
    }
  }

export default MyActivities
