import { Label, TextInput, Button } from "flowbite-react";
import { HiOutlineMail } from "react-icons/hi";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const useContact = () => {
  const form = useRef();
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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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

      <div className="flex flex-row justify-between">
        <div className="w-1/2 mr-1">
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            name="first_name"
            placeholder="First Name"
          />
        </div>
        <div className="w-1/2 ml-1">
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            placeholder="Last Name"
            name="last_name"
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
          />
        </div>
        <div className="w-1/2 ml-1">
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            placeholder="Phone Number"
            name="user_phone_number"
          />
        </div>
      </div>

      <TextInput
        id="small"
        type="text"
        sizing="sm"
        placeholder="Subject"
        name="subject_line"
      />

      <TextInput
        id="large"
        type="text"
        sizing="lg"
        placeholder="Write me an email!"
        name="message"
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
