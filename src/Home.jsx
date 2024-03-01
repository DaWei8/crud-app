import Blogs from "./Blogs";

export default function Home() {
  return (
    <div className=" px-[120px] pt-[120px] rounded-[10px] mt-[10px] bg-[#f2f5f7] ">
      <div className=" flex flex-col gap-[20px] items-center justify-center ">
        <h1 className=" text-[48px] font-semibold ">Welcome to Notashi</h1>
        <p className=" md:text-center max-w-[960px] ">
          Create React App does not support custom PostCSS configurations and is
          incompatible with many important tools in the PostCSS ecosystem, like
          `postcss-import`. We highly recommend using Vite, Parcel, Next.js, or
          Remix instead of Create React App. They provide an equivalent or
          better developer experience but with more flexibility, giving you more
          control over how Tailwind and PostCSS are configured.
        </p>
      </div>
      <div className=" mt-[40px] flex items-center justify-center ">
        <Blogs />
      </div>
    </div>
  );
}
