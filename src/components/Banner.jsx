import { useContext, useState } from 'react'
import { apiData } from './ContextApi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Banner = () => {
  let data = useContext(apiData)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = data.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let info = useSelector((state) => state.product.product);
  console.log(info);

  return (
    <>
      <section className='pb-20 pt-10 bg-gray-100'>
        <div className="w-10/12 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {currentItems.map((item) => (
              <div key={item.id} className="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs">
                <Link to={`/ProductDetails/${item.id}`}>
                  <img className="rounded-base mb-6 h-60 w-full object-cover" src={item.thumbnail} alt={item.title} />
                </Link>
                <div>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <svg key={index} className={`w-4 h-4 ${index < Math.round(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.869 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                      </svg>
                    ))}
                  </div>
                  <h5 className="text-xl font-semibold mb-4">{item.title}</h5>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${item.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          {data.length > itemsPerPage && (
            <div className="flex justify-center mt-12 gap-2 flex-wrap">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded-md disabled:opacity-50 bg-white"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-white'}`}
                >
                  {index + 1}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded-md disabled:opacity-50 bg-white"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Banner