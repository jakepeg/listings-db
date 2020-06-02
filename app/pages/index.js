import React, { useState, useEffect } from 'react'
import Filter from '../components/filter'
import ActivityList from '../components/activityList'
import { getActivities, getCategories } from '../actions'
import Card from '../components/card'

const Home = (props) => {

  const [ filter, setFilter ] = useState('All activities')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterActivities = activities => {

    if (filter === 'All activities') {
      return activities
    }

    return activities.filter((a) => {
      console.log(filter)
      return a.category && a.category.includes(filter)
    })
  }

  return (
    <div className="contain home-page">
      <div className="rowz">

          <Filter 
            changeCategory={changeCategory}
            activeCategory={filter}
            categories={props.categories}
          />

      </div>

          {/* <div className="" id="grid"> */}
            {/* <Card /> */}

            <ActivityList activities={filterActivities(props.activities) || []} />
          {/* </div> */}
        </div>

  )
}

  Home.getInitialProps = async () => {
    const activities = await getActivities()
    const categories = await getCategories()
    return {
      activities,
      categories
    }
  }

export default Home
