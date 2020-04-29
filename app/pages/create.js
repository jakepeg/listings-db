import Create from '../components/create'
import auth0 from '../services/auth0'

const CreatePage = () => (
  <>
    { auth0.isAuthenticated() &&
      <Create />
    }
    { auth0.isAuthenticated() === false &&
      <h1>Please sign in to add activities</h1>
    }
  </>
)

export default CreatePage