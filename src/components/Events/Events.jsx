import React from "react";

const shopEvents = [
  {
    id: 1,
    title: "Summer Interior Sale",
    description: "Get up to 40% off on selected furniture and decor items this summer.",
    image:
      "https://images.pexels.com/photos/19199133/pexels-photo-19199133/free-photo-of-sofa-and-table-on-terrace.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "April 20, 2025",
  },
  {
    id: 2,
    title: "Lighting Launch Week",
    description: "Discover our latest modern lighting collection with a 20% discount.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    date: "May 5, 2025",
  },
  {
    id: 3,
    title: "Outdoor Essentials Fair",
    description: "Upgrade your patio with stylish and durable outdoor pieces.",
    image:
      "https://images.pexels.com/photos/29961627/pexels-photo-29961627/free-photo-of-eco-friendly-leather-care-kit-in-warm-lighting.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "June 15, 2025",
  },
];

const ShopEvents = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-10" id="shop-events">
      <h2 className="text-3xl font-bold text-center mb-10">Shop Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shopEvents.map((event) => (
          <div
            key={event.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{event.description}</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopEvents;
