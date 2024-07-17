import { Label, TextInput, Button } from "flowbite-react";
import { HiOutlineMail } from "react-icons/hi";

const useContact = () => {
  return (
    <div className="w-full md:w-5/12 md:ml-3 border rounded-lg border-white p-4">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-left text-amber-200 text-3xl font-bold">
            Connect with Me!
          </h2>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-1/2 mr-1">
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              placeholder="First Name"
            />
          </div>
          <div className="w-1/2 ml-1">
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="w-1/2 mr-1">
            <TextInput id="small" type="text" sizing="sm" placeholder="Email" />
          </div>
          <div className="w-1/2 ml-1">
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div>
          <TextInput id="small" type="text" sizing="sm" placeholder="Subject" />
        </div>
        <div>
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            placeholder="Write me an email!"
          />
        </div>
        <Button color="light" className="w-1/2 outline outline-amber-200 mt-2">
          <HiOutlineMail className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default useContact;
