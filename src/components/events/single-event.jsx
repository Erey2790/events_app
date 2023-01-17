import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import Image from "next/image";



const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter

  const onSubmit = async(e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id
    try{
      // POST fetch request
      // body emailValue and the event Id
    } catch (e) {
      console.log('ERROR', e)
    }

  }
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={800} height={500} alt={data.title} />

      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event! </label>
        <input ref={inputEmail} type="email" id="email" placeholder="please insert your email here" />
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
