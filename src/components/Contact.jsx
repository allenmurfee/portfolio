import { Label, TextInput, Button } from "flowbite-react";
import { HiOutlineMail } from "react-icons/hi";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SubmittedMessage from "./SubmittedMessage";

const useContact = () => {
  const form = useRef();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subjectLine, setSubjectLine] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          clearForm();
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setSubjectLine("");
    setMessage("");
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="contact"
      className="w-full md:w-5/12 md:ml-3 border rounded-lg border-white p-4 flex flex-col gap-4"
    >
      <h2 className="text-left text-amber-200 text-3xl font-bold">
        Connect with Me!
      </h2>

      {submitted ? <SubmittedMessage /> : null}
      <div className="flex flex-row justify-between">
        <div className="w-1/2 mr-1">
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            name="first_name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-1">
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            placeholder="Last Name"
            name="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="w-1/2 mr-1">
          <TextInput
            name="user_email"
            id="small"
            type="text"
            sizing="sm"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-1">
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            placeholder="Phone Number"
            name="user_phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>

      <TextInput
        id="small"
        type="text"
        sizing="sm"
        placeholder="Subject"
        name="subject_line"
        value={subjectLine}
        onChange={(e) => setSubjectLine(e.target.value)}
      />

      <TextInput
        id="large"
        type="text"
        sizing="lg"
        placeholder="Write me an email!"
        required
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button
        type="submit"
        color="gray"
        className="w-1/2 outline outline-amber-200 mt-2"
      >
        <HiOutlineMail className="mr-2 h-5 w-5" />
        Send Message
      </Button>
    </form>
  );
};

export default useContact;
