
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
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{activity.name}</h1>
        <p className="lead">{ activity.description }</p>
        <hr className="my-4" />
        <p>{ activity.category }</p>
        <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more</button>
        <button onClick={() => handleDelete(id)} className="btn btn-danger btn-lg mr-1" href="#" role="button">Delete</button>
        <Link href="/activities/[id]/edit" as={`/activities/${id}/edit`}>
          <button 
          className="btn btn-warning btn-lg" 
          role="button">Edit</button>
        </Link>
      </div>
      <p className="desc-text">{ activity.longDesc }</p>
      <style jsx>{`
        .desc-text {
          font-size: 18px;
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