import React from 'react'
import Link from 'next/link'

class ActivityList extends React.Component {

  shorten = (text, maxlength) => {
    if (text && text.length >= maxlength) {
      return text.substr(0, maxlength) + '...'
    }
    return text
  }

  render() {

    const { activities } = this.props

      return (
      <>
        { activities.map(activity => 
            (
              <div key={activity.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <Link href="/activities/[id]" as={`/activities/${activity.id}`}>
                        <a><img className="card-img-top" src={activity.image} alt={activity.name} /></a>
                      </Link>
                      <div className="card-body">
                        <h4 className="card-title">
                          <Link href="/activities/[id]" as={`/activities/${activity.id}`}>
                            <a>{activity.name}</a>
                          </Link>
                        </h4>
                        <p className="card-text">{this.shorten(activity.description, 100)}</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">{activity.rating}</small>
                      </div>
                    </div>
              </div>
            )
          )
        }
      </>
      )
    }
}

export default ActivityList