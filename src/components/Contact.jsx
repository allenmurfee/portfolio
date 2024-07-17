import { Label, TextInput, Button } from "flowbite-react";
import { HiOutlineMail } from "react-icons/hi";

const useContact = () => {
  return (
    <div className="w-full md:w-1/2 md:ml-2 border rounded-lg border-white p-4">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-left text-amber-200 text-3xl font-bold">
            Connect with Me!
          </h2>
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="small" value="First Name" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="small" value="Last Name" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="small" value="Email" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
          <div className="mb-2 block">
            <Label
              className="text-white"
              htmlFor="small"
              value="Phone Number"
            />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="small" value="Subject" />
          </div>
          <TextInput id="small" type="text" sizing="sm" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="large" value="Message" />
          </div>
          <TextInput id="large" type="text" sizing="lg" />
        </div>
        <Button color="light" className="outline outline-sky-300 mt-2">
          <HiOutlineMail className="mr-2 h-5 w-5" />
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default useContact;
