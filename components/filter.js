import React, { useState } from 'react';

const Filter = (props) => {

  const [category, setCategory] = useState('')
  const [hideLabel, setLabel] = useState(false)
  // const classes = useStyles();

  const handleChange = event => {
    props.changeCategory(event.target.value)
    setCategory(event.target.value)
    setLabel(true)
  };

  return (
    <>
      <label for="activities">Discover:</label>
      <select id="activities" onChange={handleChange}>
      { props.categories.map(c => 
        <option key={c.id} value={c.name}>{c.name}</option>
        )}
      </select>
    </>
  );
}

export default Filter