import React, { useState } from 'react';
import * as ai from 'react-icons/ai';
import * as md from 'react-icons/md';
import Navbar from './Navbar';
import FullSidebar from './FullSidebar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Booked = () => {

  const [organiserId, setOrganiserId] = useState('');
  const [username, setUsername] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      organiserId,
      username,
      eventDate,
      bookingStatus,
      headCount,
      amount
    });

    setShowForm(false)
  };

  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const handleEditClick = () => {
    setShowForm(true);
  };

  const products = [
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Priya",
      sdate: "Jan 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    },
    {
      bid: 1,
      oid: 1,
      uname: "Megha",
      sdate: "Nov 23 2023",
      edate: "Dec 24 2023",
      type: "Team Meet",
      count: 20,
      amt: 20000
    }
  ];

  const bookingStatusOptions = ['Pending', 'Verified', 'Booked'];

  const filteredProducts = products.filter(product =>
    product.uname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'date') {
      return new Date(a.sdate) - new Date(b.sdate);
    } else if (sortOption === 'status') {
      return bookingStatusOptions.indexOf(a.type) - bookingStatusOptions.indexOf(b.type);
    } else if (sortOption === 'headCount') {
      return a.count - b.count;
    }
    return 0;
  });

  const handleSortChange = (option) => {
    setSortOption(option);
  };



  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <FullSidebar/>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className=''>
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{paddingRight:840}}
              className="border text-sm border-gray-300 rounded-md px-3 py-1 m-4 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
            />
            {/* Sort dropdown */}
            <div className="relative inline-block text-left mb-4">
              <select
                value={sortOption}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border text-gray-400 text-sm border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              >
                <option value="">SORT BY</option>
                <option value="date">Date</option>
                <option value="status">Booking Status</option>
                <option value="headCount">Head Count</option>
              </select>
            </div>
          </div>
          <table className="font-Times New Roman w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Book ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Org ID
                </th>
                <th scope="col" className="px-6 py-3">
                  UserName
                </th>
                <th scope="col" className="px-6 py-3">
                  Sub Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Event Data
                </th>
                <th scope="col" className="px-6 py-3">
                  Booking Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Head Count
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className='text-xs'>
              {sortedProducts.map((product, index) => (
                <tr
                key={product.bid}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600`}
              >
                  <td className="px-6 ">{product.bid}</td>
                  <td className="px-6 ">{product.oid}</td>
                  <td className="px-6 ">{product.uname}</td>
                  <td className="px-6 ">{product.sdate}</td>
                  <td className="px-6 ">{product.edate}</td>
                  <td className="px-6 ">
                    <div className="relative inline-block text-left">
                      <select
                        className="w-24 h-full px-2 border py-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"S
                      >
                        <option value="" disabled>
                          Select Status
                        </option>
                        {bookingStatusOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </td>
                  <td className="px-6 ">{product.count}</td>
                  <td className="px-6 ">{product.amt}</td>
                  <td className="flex items-center px-6 py-4">
                    {/* Edit button */}
                    <button onClick={handleEditClick} className="text-sm font-normal text-blue-600 dark:text-blue-500 hover:underline">
                      <md.MdEdit />
                    </button>
                    {/* Delete button */}
                    <a href="#" className="text-lg font-normal text-red-600 dark:text-red-500 hover:underline ms-3">
                      <ai.AiFillDelete />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
              <div className="bg-white p-6 rounded-lg">
                {/* Your form content goes here */}
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
          <button onClick={() => setShowForm(false)} className="mt-4 text-lg text-gray-600 rounded-lg ml-48"><ai.AiOutlineCloseCircle /></button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="organiserId" className="block text-sm font-medium text-gray-700">Organiser ID</label>
                <input type="text" id="organiserId" value={organiserId} onChange={(e) => setOrganiserId(e.target.value)} className=" bg-gray-100 mt-3 px-8 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-100 mt-1 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="headCount" className="block text-sm font-medium text-gray-700">Head Count</label>
                <input type="number" id="headCount" value={headCount} onChange={(e) => setHeadCount(e.target.value)} className="bg-gray-100 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-100 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">Event Date</label>
                <input type="date" id="eventDate" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="bg-gray-100 mt-1 py-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Booked;
