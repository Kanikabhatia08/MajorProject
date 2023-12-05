import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const { cart } = useSelector((state) => state);
  const { user } = useSelector((state) => state);

  return (
    <div className="bg-cream text-brown  ">
      <nav className="flex justify-between bg-[#FFF2EB] items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
            <img src="/logo.png" alt="Logo" className="h-[128px]" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-lg text-brown font-coro mr-16 space-x-6">
          <NavLink to="/">
            <p className="text-brown hover:text-lightbrown">Home</p>
          </NavLink>
          <NavLink to="/Products">
            <p className="text-brown hover:text-lightbrown">Products</p>
          </NavLink>
          <NavLink to="/Birthstones">
            <p className="text-brown hover:text-lightbrown">Birthstones</p>
          </NavLink>
          <NavLink to="/AboutUs">
            <p className="text-brown hover:text-lightbrown">About </p>
          </NavLink>

          {
            user.length > 0 ? <NavLink to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl hover:text-lightbrown" />
                {
                  cart.length > 0 &&
                  <span
                    className="absolute -top-1 -right-2 bg-lightbrown text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full  text-white"
                  >{cart.length}</span>
                }

              </div>
            </NavLink> :
              <NavLink to="/login" >
                <p className=" text-brown hover:text-lightbrown">Login</p></NavLink>
          }

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
