import React from 'react';

const blogPosts = [
  {
    title: "How to Style Your Living Room Like a Pro",
    description: "Discover tips and tricks from top designers to elevate your living space.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "September 10, 2025",
    author: "Jane M.",
  },
  {
    title: "Top 5 Living Room Furniture Trends in 2025",
    description: "Stay ahead with the latest trends in living room décor and furniture styles.",
    image: "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "August 28, 2025",
    author: "John K.",
  },
  {
    title: "Choosing the Right Sofa for Your Space",
    description: "Size, color, and comfort — here's everything you need to know before buying a sofa.",
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "August 15, 2025",
    author: "Lena P.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-semibold text-center mb-10">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-md transition duration-300 ease-in-out overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{post.date} • by {post.author}</p>
              <p className="text-gray-700 text-sm mb-4">{post.description}</p>
              <button className="text-[#17dd1f] font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
