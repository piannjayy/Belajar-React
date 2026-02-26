import { memo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const ListView = ({ makan }) => {
  const { darkMode, setDarkMode } = useTheme();

  const klikTema = () => {
    setDarkMode(!darkMode);
  };

  console.log(darkMode)

  return (
    <div>
      <button className="btn btn-center btn-primary" onClick={klikTema}>
        Ubah Tema
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {makan?.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-200 border rounded-xl overflow-hidden"
          >
            <figure>
              <img
                src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold line-clamp-2">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">{item.city}</p>
              <p className="font-bold text-lg text-primary mt-2">
                Rating: {item.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ListView);
