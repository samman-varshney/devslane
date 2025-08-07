import AddToCart from './AddToCart'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import './style.css'
function ProductDetails() {
  return (
    <>
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 bg-white shadow-lg p-8 rounded-lg m-auto mt-[50px]">
        <div className="flex-1">
          <ProductImage src={"https://tse2.mm.bing.net/th/id/OIP.-9k_UWfc41gBitQG2PkINgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"} alt={"Coffe Mug Image"} />
        </div>
        <div className="flex-1 text-gray-700 flex flex-col items-start">
          <ProductInfo title={"Black Printed Coffee Mug"} price={"15.00"} description={'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,consectetur adipisci velit, sed quia non incidunt lores ta porro ame.Numquam eius modi tempora incidunt lores ta porro ame.'} />
          <div className="flex items-center gap-4">
            <label htmlFor="quantity" className="sr-only">Quantity</label>
            <input id="quantity" type="number" min="1" value="1" className="w-16 text-center border border-gray-300 rounded-md py-2 px-2 focus:outline-none" />
            <AddToCart />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails