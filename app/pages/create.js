import { useState } from 'react'
import { createActivity } from '../actions'
import ImageUpload from '../components/imageUpload'

const Create = (props) => {

  const defaultData = {
    name: '',
    description: '',
    image: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    website: '',
    userEmail: ''
  }

  const formData = defaultData

  const [form, setForm] = useState(formData)

  const handleChange = (event) => {
    const target = event.target
    const name = target.name

    setForm({
      ...form,
      [name]: target.value
    })
  }

  const handleCategoryChange = (event) => {
    const { options } = event.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    setForm({
      ...form,
      category: value.toString()
    })
  }


  const handleMediumChange = (event) => {
    const { options } = event.target
    const optionsLength = options.length
    let value = []

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    setForm({
      ...form,
      medium: value.toString()
    })
  }





  const submitForm = () => {
    createActivity({...form})
  }

  return (

<>
    <div className="contain top-space">
      <div className="details-card">
        <div className="card-header">
          
          <a href="/" id="back-btn">
            <img id="arrow-left" src="/arrow-left.svg" alt="Go Back" /> 
            <span className="back">BACK</span>
          </a>
        </div>

        <div className="form-card-content">



        <h1>Add an activity</h1>
        
    <form>
    <div className="add-activity-form">
      <div className="form-col">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          value={form.name}
          onChange={handleChange}
          type="text" 
          className="form-control" 
          id="name" 
          name="name" 
          aria-describedby="emailHelp" 
          placeholder="Activity name" />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input 
          onChange={handleChange}
          value={form.image}
          type="text" 
          className="form-control" 
          id="image" 
          name="image" 
          placeholder="http://....." />
        </div>
        <div className="form-group">
          <label htmlFor="ageFrom">Age from</label>
          <input 
          onChange={handleChange}
          value={form.ageFrom}
          type="text" 
          className="form-control" 
          id="ageFrom" 
          name="ageFrom" 
          placeholder="age from" />
        </div>
        <div className="form-group">
          <label htmlFor="ageTo">Age to</label>
          <input 
          onChange={handleChange}
          value={form.ageTo}
          type="text" 
          className="form-control" 
          id="ageTo" 
          name="ageTo" 
          placeholder="age to" />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input 
          onChange={handleChange}
          value={form.price}
          type="text" 
          className="form-control" 
          id="price" 
          name="price" 
          placeholder="Price" />
        </div>


        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input 
          onChange={handleChange}
          value={form.website}
          type="text" 
          className="form-control" 
          id="website" 
          name="website" 
          placeholder="Website" />
        </div>

        <div className="form-group">
          <label htmlFor="userEmail">Email</label>
          <input 
          onChange={handleChange}
          value={form.userEmail}
          type="text" 
          className="form-control" 
          id="userEmail" 
          name="userEmail" 
          placeholder="Your Email Address" />
        </div>
      </div>
      <div className="form-col">

      <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea 
          onChange={handleChange}
          value={form.description}
          className="form-control" 
          id="description" 
          name="description" 
          rows="3"></textarea>
        </div>


        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select 
          onChange={handleCategoryChange}
          multiple 
          className="form-control" 
          id="category"
          name="category">
            <option>Academic</option>
            <option>Arts and crafts</option>
            <option>Cooking</option>
            <option>Games</option>
            <option>Music and dance</option>
            <option>Outdoor</option>
            <option>Sport and fitness</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="medium">Medium</label>
          <select 
          onChange={handleMediumChange}
          multiple 
          className="form-control" 
          id="medium"
          name="medium">
            <option>Website</option>
            <option>Youtube</option>
            <option>App</option>
          </select>
        </div>



      </div>
      </div>

      <button 
          onClick={submitForm} 
          type="button" 
          className="btn btn-primary">
          Add Activity
        </button>


    </form>

    <ImageUpload />


</div>

</div>
</div>


  <style jsx>{`
    .form-card-content {
      padding: 20px;
    }

    .add-activity-form {
      margin: 50px 50px 0 50px;
      display: flex;
    }

    .form-col {
      flex: 1;
    }

    .form-group {
      display: flex;

    }

    input:not([type="submit"]) {
      font-size: 1rem;
      margin-bottom: 15px;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 300px;
    }

    select, textarea {
      font-size: 1rem;
      margin-bottom: 15px;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 300px;
    }

    h1 {
      margin-top: -35px;
    }

    label {
      width: 120px;
    }

    button {
      margin: 25px 0 25px 50px
    }

    #description {
      height: 120px;
    }

    #category {
      height: 155px;
    }

    #medium {
      height: 80px;
    }

  `}</style>


</>
  )
}

export default Create