
function Card({ name, role, image }) {
  return (
    <div className="w-80 bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500 mt-2">{role}</p>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Follow
        </button>
      </div>

    </div>
  );
}

export default Card