import React from "react";
import { Field, reduxForm } from "redux-form";
import useForm from '../../hooks/'


const TodoForm = props => {
  const { handleChange, handleSubmit } = useForm(props.handleSubmit);

  return (
    <>
      <h3>Add Job</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>
          <span>Job</span>
          <Field
            name="name"
            component="input"
            placeholder="Add Job"
          />
        </label>
        <label>
          <span>Price</span>
          <Field
            name="price"
            type="number"
            component="input"
            placeholder="Price"
          />
        </label>
        <label>
          <span>Token Test</span>
          <Field component="input" type="text" name="token"/>
        </label>
        <button>Add Job</button>
      </form>
    </>
  );
};

export default reduxForm({
  form: "jobs"
})(TodoForm);
