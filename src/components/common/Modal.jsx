import React from 'react'
import EndClass from './EndClass'

export default function Modal(props) {
  return (
    <div>
      <div className='transition duration-300 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40' ></div>
      <div className='modal transition duration-300' >
        <div id="defaultModal" className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center h-modal  flex" aria-modal="true" role="dialog">
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">Select a reason to end the class</h3>
                <button onClick={props.onClick} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  <EndClass onClick={props.onClick} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

