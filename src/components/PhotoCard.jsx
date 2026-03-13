export default function PhotoCard({ photo, isFav, toggleFav }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">

      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="w-full h-60 object-cover"
      />

      <div className="flex justify-between items-center p-4">

        <p className="text-gray-700 font-medium">
          {photo.author}
        </p>

        <button
          onClick={() => toggleFav(photo.id)}
          className="text-2xl hover:scale-110 transition"
        >
          {isFav ? "❤️" : "🤍"}
        </button>

      </div>
    </div>
  );
}

// export default function PhotoCard({ photo, isFav, toggleFav }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">

//       <img
//         src={photo.download_url}
//         alt={photo.author}
//         className="w-full h-60 object-cover"
//       />

//       <div className="flex justify-between items-center p-4">

//         <p className="text-gray-700 font-medium">
//           {photo.author}
//         </p>

//         <button
//           onClick={() => toggleFav(photo.id)}
//           className="text-2xl"
//         >
//           {isFav ? "❤️" : "🤍"}
//         </button>

//       </div>

//     </div>
//   );
// }