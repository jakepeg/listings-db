import { useRouter } from 'next/router'
import Modal from './modal'
import AddActivityForm from './addActivityForm'
import { createActivity } from '../actions'

const Filter = (props) => {

  const router = useRouter()
  let modal = null

  const HandleAddActivity = (activity) => {
    createActivity(activity).then((activities) => {
      console.log(JSON.stringify(activities))
      modal.closeModal()
      router.push('/')
    })
  }

  return (
      <div>
        <Modal ref={ele => modal = ele} hasSubmit={false}>
          <AddActivityForm handleFormSubmit={HandleAddActivity} />
        </Modal>
        <h1 className="my-4">Discover</h1>
        <div className="list-group">
          { props.categories.map(c => 
            <a 
              onClick={() => props.changeCategory(c.name)}
              key={c.id} 
              href="#" 
              className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`}>{c.name}</a>
          )}
        </div>
      </div>
  )
}

export default Filter