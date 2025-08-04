import Image from "next/image";

export default function Feedback() {
  return (
    <div className="bg-[#0F0F2D] text-white font-sans p-8 ">
      <div className=" py-10">
        <h3 className="uppercase flex justify-center items-center text-md tracking-wide">
          Contact <span className="text-[#FF6A3D] px-2">Me</span>
        </h3>
        <div className="flex justify-center items-center text-2xl py-4 ">
          <p className="w-96 tracking-tight font-semibold text-center">
            I'm always open to discussing new projects and ideas.
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex justify-between items-center">
        {/* Send a message Form */}
        <form className="flex flex-col">
          <div className="flex justify-between gap-4">
            <input
              placeholder="Name"
              type="text"
              id="name"
              className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-full"
            />
            <input
              placeholder="Email"
              type="email"
              id="email"
              className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-full"
            />
          </div>
          <input
            placeholder="Subject"
            type="text"
            id="subject"
            className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-full"
          />
          <textarea
            placeholder="Message"
            id="message"
            className=" pl-4 flex items-center mb-4 p-2 bg-[#1F1F3D] border border-gray-700 rounded-xl"
            rows={5}
          ></textarea>

          <button
            type="submit"
            className="bg-[#FF6A3D] text-white py-2 px-4  rounded-xl text-uppercase w-2/5"
          >
            Send Message
          </button>
        </form>

        {/* Picture */}
        <div className="">
          <Image
            src="/postmail.jpg"
            alt="Feedback"
            className=""
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
