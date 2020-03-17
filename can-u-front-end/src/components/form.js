import React from "react";
import { Field, reduxForm } from "redux-form";


const TodoForm = props => {
  
  console.log(props)

  return (
    <>
      <h3>Add Job</h3>
      <form onSubmit={props.handleSubmit}>
        <label>
          <span>Job</span>
          <Field
            name="text"
            component="input"
            placeholder="Add Job"
          />
        </label>
        <label>
          <span>Price</span>
          <Field
            type="number"
            component="input"
            placeholder="Price"
          />
        </label>
        <label>
          <span>Due</span>
          <Field component="input" type="date" name="due" />
        </label>
        <button>Add Job</button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "job"
})(TodoForm);
