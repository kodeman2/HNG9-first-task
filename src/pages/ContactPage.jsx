import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import './contactpage.css'


// contact page function

function ContactPage() {

  // form validation with react Hooks form

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  // form submit function

  const onSubmit = (data) => {

   //form result function
    console.log(data);
    reset();


    alert("Message sent successfully");
  };

  const name="kodeman_"




  return (
    <div className="contact__contianer">
      <div className="contact__form">
      <div className="contact__container__header">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
       <div className="contact_name">
        
       
        <div className="form-group">
          <label htmlFor="first_name">Firstname</label><br/>
          <input
          placeholder="Enter your first name"
            type="text"
            name="first_name"
            className={`form-control ${errors.firstname ? "is-invalid" : ""}`}
            id="first_name"
            {...register("firstname", { required: "" })}
            onKeyUp={() => trigger("firstname")}
          />
          {errors.firstname && (
            <small className="invalid-feedback">
              {errors.firstname.message}
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Lastname</label> <br/>
          <input
          placeholder="Enter your last name"
            type="text"
            name="lastname"
            className={`form-control ${errors.lastname ? "is-invalid" : ""}`}
            id="last_name"
            {...register("lastname", { required: "" })}
            onKeyUp={() => trigger("lastname")}
          />
          {errors.lastname && (
            <small className="invalid-feedback">
              {errors.lastname.message}
            </small>
          )}
        </div>
       
            
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
          placeholder="yourname@email.com"
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            {...register("email", {
              required: "",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "",
              },
            })}
            onKeyUp={() => trigger("email")}
          />
          {errors.email && (
            <small className="invalid-feedback">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
          placeholder="Send me a message and I'll reply you as soon as possible..."
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            {...register("message", { required: "Please enter a message" })}
            onKeyUp={() => trigger("message")}
          ></textarea>

          {errors.message && (
            <small className="invalid-feedback">{errors.message.message}</small>
          )}
        </div>
        <div className="checkcontainer">
        <input 
        type="checkbox"  
        name="check" value="check" 
      {...register("check",
       { required: "" })}
      onKeyUp={() => trigger("check")}
      />
      <span className="checkmark"></span>
      <label htmlFor="check">You agree to providing your data to {name} who may contact you.</label>
        </div>
        
        <button type="submit" id="btn__submit" className="btn__submit"
        disabled={errors.firstname || errors.lastname || errors.email || errors.message || errors.checkbox ? true : false} >
          Send message
        </button>

      </form>
    </div>
    </div>
  );
}

export default ContactPage;
