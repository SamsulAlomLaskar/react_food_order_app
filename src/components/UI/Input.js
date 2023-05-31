import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props, ref) => {
  console.log(props, "INPUT");
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* <input id={props.input.id} {...props.input} /> */}
      <input
        ref={ref}
        // dynamic way to pass the attribute name & values
        // eg: {type='text', id='xyz'}
        {...props.input}
      />
    </div>
  );
});

export default Input;
