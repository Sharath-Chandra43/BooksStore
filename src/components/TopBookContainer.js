const TopBookContainer = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRandomBook();
  }, []);

  const fetchRandomBook = async () => {
    try {
      const response = await fetch(BOOKS_API);
      const data = await response.json();
      const randomBook = data.books[Math.floor(Math.random() * data.books.length)];
      setBook(randomBook);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log(error);
      setLoading(false); // Set loading to false in case of error
    }
  };

  const handleAddItem = (book) => {
    dispatch(addItem(book));
  };

  return (
    <div className="border border-cyan-50 flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 via-teal-300 to-yellow-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-0 mx-0"> {/* Set mb-0 and mx-0 to remove margin and padding */} 
      <div className="w-full md:flex md:justify-between items-center">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
          </div>
        ) : (
          <>
            <img
              src={book?.image}
              alt="book"
              className="w-full md:w-1/2 object-cover sm:w-2/3 sm:pl-4 sm:ml-36 rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
            <div className="ml-7 md:p-10 sm:p-5 sm:text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide">{book?.title}</h1>
              <h2 className="text-lg md:text-xl font-medium text-gray-800 border-2 border-gray-200 rounded-md p-2 m-4 bg-white opacity-90 hover:opacity-100 transition-opacity duration-300">
                {book?.subtitle}
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-gray-900 xs:mb-7">{book?.price}</h3>
              <button
                className="md:px-6 md:py-3 sm:px-4 sm:py-2 bg-yellow-600 text-white rounded-lg transform hover:bg-yellow-500 hover:text-black transition-all duration-300 ease-in-out hover:scale-105"
                onClick={() => handleAddItem(book)}
              >
                Add to Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopBookContainer;
