import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex w-full gap-5">
      <div className="w-[40%]">
        <img src={item.image} className="w-full" alt="item" />
      </div>
      <div className="w-1/2 flex flex-col gap-2">
        <h1 className="font-bold text-xl text-brown">{item.title}</h1>
        <p className=" text-lightbrown text-sm">{item.description}</p>
        <div className="mt-10 w-full flex flex-col gap-5 items-end">
          <p className="text-brown">Rs {item.price}</p>
          <button className="bg-brown text-white font-semibold px-5 py-2 
          rounded-lg flex text-sm mx-auto items-center gap-2 mb-9" onClick={removeFromCart}>
            <FcDeleteDatabase /> Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
