import React from 'react'
import Link from 'next/link'

const ActivityList = (props) => {
  const { activities } = props
  return (
    <>
      { activities.map(activity => (
            <div key={activity.id}>
              <div className="grid-item">
              <Link href="/activities/[id]" as={`/activities/${activity.id}`}>
              <a className="nounderline">
                <div className="card">
                <div className="card-image" style={{background: 'url(' + activity.image + ')'}}></div>
                <div className="card-content">
                  <h2>{activity.name}</h2>
                  <div className="card-footer">
                    <div className="age-range">{'age ' + activity.ageFrom + ' - ' + activity.ageTo}</div>
                    <div className="location">{activity.category} - <span className={activity.medium}>{activity.medium}</span></div>
                  </div>
                </div>
                </div>
                </a>
              </Link>
              </div>
            </div>
          )
        )
      }

      <style jsx>{`

        .nounderline {
          text-decoration: none;
        }

        .card {
          width: 350px;
          height: 340px;
          background: #fff;
          box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
          transition: 0.3s;
          cursor: pointer;
        }

        .card :hover {
          box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12);
        }

        .card-image {
          width: 350px;
          height: 250px;
          display: block!important;
          background-size: cover!important;
          background-repeat: no-repeat!important;
        }

        .card-content {
          padding: 0 20px;
          display: block;
        }
        
        .card-footer {
          display: flex;
          margin-top: -7px;
          color: rgb(0, 0, 0, 0.5);
        }

        .location {
          margin-left: auto;
        }

        .close {
          margin-bottom: -150px;
        }

        .Website {
          color: Teal;
        }

        .App {
          color: DodgerBlue;
        }

        .Youtube {
          color: FireBrick;
        }

      `}</style>
    </>
  )
}

export default ActivityList