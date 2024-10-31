import './App.css';
import { useEffect, useState } from "react"
import ProductCard from './component/ProductCard';
import Skeleton from './component/Skeleton';
import Header from './component/Header';



function App() {
  const [products, setProducts] = useState([])
  const [filteredProduct, setFilteredProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const filterProduct = () => {
    const result = filteredProduct.filter(product => product.rating.rate >= 4)
    setFilteredProduct(result)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const rawData = await fetch("https://fakestoreapi.com/products")
      const data = await rawData.json()
      setProducts(data)
      setFilteredProduct(data)
      setIsLoading(false)
    }
    fetchData()

  }, [])

useEffect(() => {
  const searchedProduct = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
  setFilteredProduct(searchedProduct)
},[products, searchText])

  return isLoading ? <Skeleton /> : (
    <div>
      <Header />
      <div className=''>
        <div class="flex justify-between mx-5">
          <button onClick={filterProduct} className=" bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            Top rated product
          </button>
          <div className='flex'>
            <input onChange={(e) => setSearchText(e.target.value)}value={searchText} type="text" placeholder="Search..." class="border border-gray-300 rounded-l-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md transition duration-300 ease-in-out">
              Search
            </button>
          </div>
        </div>
        <div>
        </div>

        <div className="flex flex-wrap gap-3">
          {
            filteredProduct.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
