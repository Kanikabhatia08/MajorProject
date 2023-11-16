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
        <h1 className="font-bold text-xl">{item.title}</h1>
        <p className=" text-slate-600 text-sm">{item.description}</p>
        <div className="mt-10 w-full flex flex-col gap-5 items-end">
          <p className="text-green-600">${item.price}</p>
          <button className="bg-slate-800 text-white font-semibold px-5 py-2 rounded-lg flex text-sm mx-auto items-center gap-2" onClick={removeFromCart}>
            <FcDeleteDatabase /> Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
