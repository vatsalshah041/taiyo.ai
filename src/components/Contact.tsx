import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcontact } from '../actions/someActions';
export default function Contact() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [status, setStatus] = useState('active');
    const dispatch = useDispatch();
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = () => {
    console.log('Submitted:', fname, lname, status);
    const contactData = { fname, lname, status }; // Convert to an object
    dispatch(addcontact(contactData));

  };
  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 " style={{border:"black 1px solid"}}> 
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <button
            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={toggleFormVisibility}
          >
            Create
          </button>
          
        </div>
        {isFormVisible && (
            
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add/Edit contact
          </h2>
          {/* <form className="space-y-6" > */}
            <div>
              <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  autoComplete="email"
                  required
                  value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  autoComplete="current-password"
                  required
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
            <input checked={status === 'active'} onChange={() => setStatus('active')} id="country-option-1" type="radio" name="countries" value="active" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
            <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
            Active
            </label>
        </div>
        <div className="flex items-center mb-4">
            <input checked={status === 'inactive'} onChange={() => setStatus('inactive')} id="country-option-1" type="radio" name="countries" value="inactive" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" />
            <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
            Inactive
            </label>
        </div>

        <div>
              <button
              onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Add
              </button>
            </div>
        
          {/* </form> */}

          
        </div>
        )}
      </div>
    </>
  )
}
