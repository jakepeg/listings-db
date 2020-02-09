
import { useRouter } from 'next/router'
import { getActivityById, deleteActivity } from '../../../actions'
import Link from 'next/link'

const DetailPage = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { activity } = props

  const handleDelete = (id) => {
    deleteActivity(id).then(() => {
      router.push('/')
    })
  }

  return (
    <div className="contain">
      <div className="details-card">
        <div className="card-header">
          <h1>{activity.name}</h1>
          <div id="back-btn"><img id="arrow-left" src="/arrow-left.svg" alt="Go Back" /> <span className="back">BACK</span></div>
        </div>

        <div className="card-banner">

        </div>

        <div className="card-content">

        <div className="description">
          <p>{ activity.description }</p>
          <p className="categories">{ activity.category }</p>
        </div>
        <img className="card-image" src={activity.image} alt={activity.name} />
        

        {/* <button onClick={() => handleDelete(id)} href="#" role="button">Delete</button>
        <Link href="/activities/[id]/edit" as={`/activities/${id}/edit`}>
          <button 
          role="button">Edit</button>
        </Link>

        <p className="desc-text">{ activity.longDesc }</p> */}

        </div>

      </div>

      <style jsx>{`

        .card-content {
          padding: 20px;
          display: flex;
          justify-content: space-between;
        }

        .card-header {
          display: flex;
          padding: 20px;
        }

        #back-btn {
          margin-left: auto;
        }

        #arrow-left {
          margin-top: 20px;
        }

        .details-card {
          width: 1140px;
          background: #fff;
          box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
        }

        .desc-text {
          font-size: 18px;
        }

        .card-banner {
          display: flex;
          height: 70px;
          background: #0097A7;
        }

        .card-image {
            width: 700px;
            display: block!important;
            background-size: cover!important;
            background-repeat: no-repeat!important;
        }

        .description {
          width: 370px;
        }

      `}</style>
    </div>
  )
}

DetailPage.getInitialProps = async ({ query }) => {
  const activity = await getActivityById(query.id)
  return { activity }
}

export default DetailPage