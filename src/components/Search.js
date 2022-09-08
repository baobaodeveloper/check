import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { AiFillAlert } from 'react-icons/ai';
import { AiFillAliwangwang } from 'react-icons/ai';
import { AiFillBug } from 'react-icons/ai';

const app = [
  { key: 'Facebook', value: <BsFacebook /> },
  { key: 'Gmail', value: <AiFillAlert /> },
  { key: 'Google', value: <BsFacebook /> },
  { key: 'Taildwindss', value: <AiFillAliwangwang /> },
  { key: 'Express', value: <BsFacebook /> },
  { key: 'JavaScript', value: <BsYoutube /> },
  { key: 'Css', value: <AiFillBug /> },
  { key: 'Html', value: <BsFacebook /> },
  { key: 'Tyscript', value: <BsFacebook /> },
];
export const Search = () => {
  const [listApp, setListApp] = useState(app);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const list = listApp.filter((item) =>
      item.key
        .split(' ')
        .some((word) =>
          word.toLowerCase().startsWith(query.toLowerCase())
        )
    );
    setListApp(list);

    if (!query) {
      setListApp(app);
    }
  };
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[500px]  container'>
        <div className='flex justify-center items-center'>
          <img
            className='w-[500px]'
            src='https://thumbs.dreamstime.com/b/google-icon-logo-simple-vector-filled-flat-google-icon-logo-solid-pictogram-isolated-white-background-159029191.jpg'
            alt=''
          />
        </div>

        <div>
          <form>
            <label
              htmlFor='default-search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
            >
              Search
            </label>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <input
                value={query}
                onChange={handleChange}
                type='search'
                id='default-search'
                className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Mockups, Logos...'
                required
              />
              <button
                onClick={handleSubmitForm}
                type='submit'
                className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className='grid grid-cols-4 gap-5 mt-10'>
          {listApp.map((item, idx) => (
            <div
              className='flex flex-col items-center gap-2'
              key={idx}
            >
              <div>{item.value}</div>
              <div>{item.key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
