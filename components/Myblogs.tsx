import Image from "next/image";

export default function MyBlogs() {
  return (
    <div className="bg-[#0F0F2D] text-white font-sans pt-20">
      <h3 className="uppercase flex justify-center items-center text-md tracking-wider">
        My <span className="text-[#FF6A3D] px-2">Blogs</span>
      </h3>
      <div className="flex justify-center items-center text-2xl py-4">
        <p className="w-96 tracking-tight font-semibold text-center">
          Here are some of my latest blog posts.
        </p>
      </div>


      <div>
        {/* Blog Post Card with a picture */}
        <div className="bg-[#1F1F3D] p-4 rounded-lg shadow-md">
          <Image
            src="/postmail.jpg"
            alt="Blog Post 1"
            className="w-48 h-48 object-cover rounded-md"
            width={500}
            height={300}
          />
          <h4 className="text-lg font-semibold mt-2">Blog Post Title 1</h4>
          <p className="text-sm mt-1">
            A brief description of the blog post goes here.
          </p>
        </div>
      </div>
    </div>
  );
}
