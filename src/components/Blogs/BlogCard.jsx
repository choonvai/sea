import React from 'react';

const BlogCard = ({ date, title, authorPrefix, authorName, avatar, tags }) => {
  return (
    <article className="relative flex flex-col p-6 min-w-[250px] w-[400px] h-[350px] rounded-lg bg-gray-900 shadow-lg transition-transform hover:translate-y-[-0.25rem] focus-within:translate-x-[130px]">
      <header className="mb-auto">
        <p className="text-sm text-gray-400">{date}</p>
        <h2 className="text-lg mt-1 font-bold hover:text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text">
          {title}
        </h2>
      </header>
      <div className="flex items-center mt-6">
        <a href="#" className="mr-4">
          <img
            src={avatar}
            alt="Author Avatar"
            className="w-10 h-10 rounded-full grayscale"
          />
        </a>
        <div>
          <p className="text-sm text-gray-400 font-semibold">{authorPrefix}</p>
          <p className="text-base font-medium">{authorName}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <a
            key={index}
            href="#"
            className="text-xs font-semibold uppercase text-gray-400 px-3 py-1 border border-gray-700 rounded-full hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-orange-400 to-pink-500"
          >
            {tag}
          </a>
        ))}
      </div>
    </article>
  );
};


export default BlogCard;