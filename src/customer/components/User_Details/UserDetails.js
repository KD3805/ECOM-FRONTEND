import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import MyAccount from './MyAccount';
import WishList from './WishList';
import ContactUs from './ContactUs';
import OrderHistory from '../MyOrders/OrderHistory';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const UserDetails = () => {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const layout = querySearch.get("layout")
  const [activeTab, setActiveTab] = useState(null);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    setActiveTab(layout)
  }, [layout]);

  const menuBar = [
    {
      name: 'My Account',
      nav: '/user-details/?layout=0'
    },
    {
      name: 'Wish List',
      nav: '/user-details/?layout=1'
    },
    {
      name: 'Order History',
      nav: '/user-details/?layout=2'
    },
    {
      name: 'Contact us',
      nav: '/user-details/?layout=3'
    }
  ]

  return (
    <div>
      <div className='py-10 px-32 flex justify-center items-center user-details-box relative'>
        <div className='w-full'>

          <div className='flex items-center justify-between w-full border-b'>
            <div className='open-sidebar-btn mb-2' onClick={() => setChecked(true)}>
              <MenuIcon />  
            </div>

            <h1 className='lg:text-3xl md:text-2xl text-2xl mb-2 font-semibold text-end'>{menuBar?.[activeTab]?.name}</h1>
          </div>

          <div className='flex'>
            <div className={`w-1/5 border-r border-b links-container ${checked ? 'left-0' : 'left--300'}`}>

              <div className='close-sidebar-btn' onClick={() => setChecked(false)}>
                <CloseIcon />
              </div>

              {menuBar.map((item, index) => (
                <div className='border-b p-1' key={index}>
                  <p
                    className={`px-3 py-2 text-base font-semibold cursor-pointer rounded-sm ${activeTab == index ? 'bg-pink-100 text-pink-900' : 'hover:bg-gray-100'
                      }`}
                    onClick={() => {
                      handleTabClick(index)
                      navigate(item.nav)
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              ))}

            </div>

            <div className='w-4/5 h-[80vh] overflow-y-scroll border-b' id='user-details'>
              {
                layout == '0' && <MyAccount />
              }
              {
                layout == '1' && <WishList />
              }
              {
                layout == '2' && <OrderHistory />
              }
              {
                layout == '3' && <ContactUs />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails;
