import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";

const Connect = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <HomeLayout toggle={toggle} setToggle={setToggle}>
      <div className="w-full flex mt-8 py-8 justify-center">
        <div className="w-3/4 flex flex-col">
          <div className="w-full flex justify-center text-7xl font-bold tracking-widest mb-9">
            CONNECT WITH ME
          </div>
          <div className="w-full relative border border-[#727C57] rounded-sm p-12">
            <form className="flex flex-col w-full gap-2">
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="fname" className="text-[#fefffa]">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm"
                    id="fname"
                    name="fname"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="flex flex-col w-1/2">
                  <label htmlFor="lname" className="text-[#fefffa]">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm"
                    id="lname"
                    name="lname"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-[#fefffa]">
                  Email:
                </label>
                <input
                  type="email"
                  className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm"
                  id="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[#fefffa]">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  className="bg-transparent border border-[#727C57] text-grey-800 p-2 rounded-sm text-[#fefffa] focus:rounded-sm"
                  name="message"
                  placeholder="Hi! I would like to connect with you."
                  required
                ></textarea>
              </div>

              <input
                type="submit"
                value="Submit"
                className="border-[#727C57] bg-[#727C57] p-2 w-1/4"
              />
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Connect;
