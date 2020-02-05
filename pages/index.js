import React, { useState, useEffect } from 'react'
import Filter from '../components/filter'
import Carousel from '../components/carousel'
import ActivityList from '../components/activityTest'
import { getActivities, getCategories } from '../actions'

const Home = (props) => {

  const [ filter, setFilter ] = useState('All Activities')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterActivities = activities => {

    if (filter === 'All Activities') {
      return activities
    }

    return activities.filter((a) => {
      return a.category && a.category.includes(filter)
    })
  }

  return (
    <div className="container home-page">
      <div className="row">
        <div className="col-lg-12">
          <Filter 
            changeCategory={changeCategory}
            activeCategory={filter}
            categories={props.categories}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* <Carousel /> */}
          <div className="row">
            <ActivityList activities={filterActivities(props.activities) || []} />
          </div>
        </div>
      </div>
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
