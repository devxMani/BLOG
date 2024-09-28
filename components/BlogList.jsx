import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

export default function BlogList() {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      {/* Menu Buttons */}
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className="bg-black text-white py-1 px-4 rounded-sm"
        >
          All
        </button>
        <button onClick={() => setMenu("Technology")} className="">
          Technology
        </button>
        <button onClick={() => setMenu("Startup")} className="">
          Startup
        </button>
        <button onClick={() => setMenu("Lifestyle")} className="">
          Lifestyle
        </button>
      </div>

      {/* Blog List - Modified to display horizontally */}
      <div className="flex flex-wrap justify-around gap-4 mb-16 xl:mx-24">
        {blog_data.map((item, index) => {
          return (
            <BlogItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
}
