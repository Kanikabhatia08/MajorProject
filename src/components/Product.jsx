import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between font-coro
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 border-[1px] border-[#dec894]">
      <div>
        <p className="text-brown font-semibold text-xl text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-[#b8984f] font-normal text-[11px] text-left">{post.description.split(" ").slice(0,15).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="product img" className="max-h-[110%] max-w-[100%] " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 text-md font-semibold">Rs {post.price}</p>
        </div>
        
        {
          cart.some((p) => p.id === post.id) ?
          (<button
          className="text-brown font-coro border-2 border-[#dec894] rounded-full font-semibold 
          text-[11px] p-1 px-3 uppercase 
          hover:bg-[#dec894]
          hover:text-brown transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className="text-brown border-2 border-[#dec894] rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-[#dec894]
          hover:text-brown transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
     

    </div>
  );
};

export default Product;
