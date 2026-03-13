import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold text-center py-8">
        Photo Gallery
      </h1>
       

      <div className="max-w-7xl mx-auto px-6">
        <Gallery />
      </div>

    </div>
  );
}

export default App;