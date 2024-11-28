import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { AiOutlineShopping } from 'react-icons/ai';
import { LuUser2 } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartModal from '../../pages/shop/CartModal';
import { useLogoutUserMutation } from '../../redux/features/auth/authApi';
import { logout } from '../../redux/features/auth/authSlice';
//import avatar from '../../public/avatar.png'

const Banner = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Show user if logged in
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();

  // Show Drop Down Menu
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  const handleDropDownToggle = () => {
    setIsDropDownOpened(!isDropDownOpened);
  };

  // admin dropDown Menu
  const adminDropDownMenu = [
    { label: 'Dashboard', path: '/dashboard/admin' },
    { label: 'Manage Items', path: '/dashboard/manage-products' },
    { label: 'All Orders', path: '/dashboard/manage-orders' },
    { label: 'Add Product', path: '/dashboard/add-product' },
  ];

  // userDropDown Menu
  const userDropDownMenu = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Profile', path: '/dashboard/profile' },
    { label: 'Payments', path: '/dashboard/payments' },
    { label: 'Orders', path: '/dashboard/orders' },
  ];

  const dropDownMenu =
    user?.role === 'admin' ? [...adminDropDownMenu] : [...userDropDownMenu];

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div>
      <div
        className="px-4 mx-auto fixed top-0 right-0 left-0 bg-white"
        style={{ zIndex: '100', marginTop: '74px', padding: '0' }}
      >
        <div
          className="py-6 relative flex justify-evenly space-x-10"
          style={{}}
        >
          <span>
            <Link to="/search">
              <IoIosSearch className="h-7 w-7 hover:text-red-700" />
            </Link>
          </span>

          <span>
            <button onClick={handleCartToggle}>
              <AiOutlineShopping className="h-7 w-7 relative hover:text-red-700" />
              <div
                className="absolute top-3 right-45 text-xs inline-block px-1.5 bg-red-700 text-stone-200"
                style={{
                  borderBottomLeftRadius: '6px',
                  borderBottomRightRadius: '6px',
                }}
              >
                {products.length}
              </div>
            </button>
          </span>

          <span>
            {user && user ? (
              <>
                <img
                  onClick={handleDropDownToggle}
                  src={user?.profileImage || '/avatar.png'}
                  alt=""
                  className="size-7 rounded-full cursor-pointer"
                />
                {isDropDownOpened && (
                  <div className="absolute right-0 sm:right-60 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <ul className="font-medium space-y-4 p-2">
                      {dropDownMenu.map((menu, index) => (
                        <li key={index}>
                          <Link
                            onClick={() => setIsDropDownOpened(false)}
                            className="dropdown-items hover:underline"
                            to={menu.path}
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          onClick={handleLogout}
                          className="dropdown-items hover:text-red-700"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <LuUser2 className="h-7 w-7 hover:text-red-700" />
              </Link>
            )}
          </span>
        </div>
      </div>

      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </div>
  );
};

export default Banner;
