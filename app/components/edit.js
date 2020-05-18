import { useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const Edit = (props) => {

  const router = useRouter()

  const defaultData = {
    name: '',
    description: '',
    image: '',
    ageFrom: '',
    ageTo: '',
    price: '',
    website: ''
  }

  const formData = props.initialData ? {...props.initialData} : defaultData
  const [form, setForm] = useState(formData)

  const [nameError, setNameError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  // const [imageError, setImageError] = useState(false)
  const [ageFromError, setAgeFromError] = useState(false)
  const [ageToError, setAgeToError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [websiteError, setWebsiteError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)
  const [mediumError, setMediumError] = useState(false)

  const validate = () => {
    if (!form.name) {
      setNameError(true)
      return false
    }
    if (!form.ageFrom) {
      setAgeFromError(true)
      return false
    }
    if (!form.ageTo) {
      setAgeToError(true)
      return false
    }
    if (!form.price) {
      setPriceError(true)
      return false
    }
    if (!form.website) {
      setWebsiteError(true)
      return false
    }
    // if (!form.image) {
    //   setImageError(true)
    //   return false
    // }
    if (!form.description) {
      setDescriptionError(true)
      return false
    }
    if (!form.category) {
      setCategoryError(true)
      return false
    }
    if (!form.medium) {
      setMediumError(true)
      return false
    }
    return true
  }

  const handleChange = (event) => {
    const target = event.target
    const name = target.name

    setForm({
      ...form,
      [name]: target.value
    })
  }

  const [displayImage, setImageVisibility] = useState(true)

  const removeImage = () => {
    console.log("remove image")
    setImageVisibility(false)
    setForm({
      ...form,
      image: ''
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

  // const submitForm = () => {
  //   createActivity({...form}).then(() => {
  //     router.push('/my-activities')
  //   })
  // }

  // const submitForm = () => {
  //   props.handleFormSubmit({...form})
  // }

  const submitForm = () => {
    const isValid = validate()
    if (isValid) {
      props.handleFormSubmit({...form})
    }
  }

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'doozone')
      setLoading(true)
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/jakepeg/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
  
      setImage(file.secure_url)
      setLoading(false)
      setImageVisibility(true)
      setForm({
        ...form,
        image: file.secure_url
      })
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

        <h1>Edit activity</h1>
        
    <form>
    <div className="add-activity-form">
      <div className="form-col">

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          onChange={handleChange}
          value={form.name}
          type="text" 
          className="form-control" 
          id="name" 
          name="name" 
          aria-describedby="emailHelp" 
          placeholder="Activity name" />
          { nameError ? (
            <div className="form-error">enter a name</div>
          ) : null }
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
          { ageFromError ? (
            <div className="form-error">enter age from</div>
          ) : null }
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
          { ageToError ? (
            <div className="form-error">enter age to</div>
          ) : null }
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
          { priceError ? (
            <div className="form-error">enter a price</div>
          ) : null }
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
          { websiteError ? (
            <div className="form-error">enter a website</div>
          ) : null }
        </div>

        <div className="form-group">
        { displayImage === false  ? (
          <>
          <label htmlFor="file">Image</label>
          <input 
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
          />
          </>
        ) : ( null )}
          <input value={Cookies.get('sub')}
          type="hidden" 
          id="userId" 
          name="userId" />
        </div>
        <div className="form-group">
          {loading ? (
            <h3>LOADING IMAGE...</h3>
          ) : (
            <img src={form.image} style={{width: '150px'}} />
          )}

        </div>

        { displayImage ? (
        <p className="remove-image" onClick={removeImage}>remove image</p>
        ) : ( null )}
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
          { descriptionError ? (
            <div className="form-error">enter a description</div>
          ) : null }
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select 
          onChange={handleCategoryChange}
          multiple 
          value={[form.category]}
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
          { categoryError ? (
            <div className="form-error">select a category</div>
          ) : null }
        </div>

        <div className="form-group">
          <label htmlFor="medium">Channel</label>
          <select 
          onChange={handleMediumChange}
          value={[form.medium]}
          multiple 
          className="form-control" 
          id="medium"
          name="medium">
            <option>Website</option>
            <option>Youtube</option>
            <option>App</option>
          </select>
          { mediumError ? (
            <div className="form-error">select a channel</div>
          ) : null }
        </div>

      </div>
      </div>

      <button 
          onClick={submitForm} 
          type="button" 
          className="btn btn-primary">
          Update
      </button>

    </form>

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

    @media (max-width: 1100px) {
      .add-activity-form {
        flex-direction: column;
      }
    }

    .form-col {
      flex: 1;
    }

    .form-group {
      display: flex;
    }

    .form-error {
      width: 60px;
      color: red;
      font-size: 0.7rem;
      padding: 3px 0 0 3px;
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

    .remove-image {
      color: red;
      text-decoration: underline;
      font-size: 0.8rem;
      cursor: pointer;
    }

  `}</style>


</>
  )
}

export default Edit