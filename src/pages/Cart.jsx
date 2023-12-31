import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useSelector((state) => state);
  const [showItem, setShowItem] = useState(false);
  

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(user)
  return (
    <div className="py-24 bg-cream">
      {user.length > 0 ? <>
        <h1 className="w-full capitalize text-brown text-center font-semibold text-2xl">
          Hi, {user[0]?.name}
        </h1>
        {cart.length > 0 ? (
          <div className="w-full max-w-6xl my-20 gap-10 mx-auto flex ">
            <div className="w-[70%] flex flex-col gap-20">
              {cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />;
              })}
            </div>
            <div className="h-auto w-[1px] bg-gray-400" />
            <div className="w-[30%]">
              <div className="w-full flex flex-col">
                <h1 className="font-bold text-2xl text-brown">Your Cart</h1>
                <h3 className="text-lightbrown mt-5 text-lg ">Summary :</h3>
                <div className="w-full font-semibold py-2 flex justify-between">
                  <p>Total Items :</p>
                  <p>
                    {cart.length}
                  </p>
                </div>
                <div className="w-full flex pb-2 font-semibold justify-between">
                  <p>Total Amount : </p>
                  <p>
                    ${totalAmount}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center mt-5">
                <button className="bg-brown text-white text-lg font-semibold px-5 
                py-2 rounded-lg" onClick={()=> setShowItem(true)}>CheckOut Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center">
            <h1 className="text-4xl font-bold ">Cart Empty</h1>
            <Link to={"/"}>
              <button className="text-2xl text-white rounded-md bg-brown px-3 py-1.5">
                Shop Now</button>
            </Link>
          </div>
        )}
      </>
        : <div className="w-screen h-screen text-xl flex items-center justify-center text-lightbrown">
          Please Login Again to Continue, <Link to={"/login"} className="font-bold text-brown">
            Login</Link>
        </div>
      }
    </div>
  );
};

export default Cart;
