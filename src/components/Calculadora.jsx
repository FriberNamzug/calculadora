import React from 'react'

export function Calculadora() {
    return (
        <div className='flex flex-col items-center'>


            <div class="p-6 bg-white w-56 rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 class="text-3xl font-bold text-center mb-5 text-gray-900 dark:text-white">Calculadora</h5>


                <div class="mb-2">
                    <input
                        type="text"
                        class=" w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                    />
                </div>


                <div>
                    <div class="grid gap-2 grid-cols-4 text-blue-50">
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>7</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>8</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>9</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-red-500 text-gray-900 font-bold'>➗</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>4</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>5</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>6</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-red-500 text-gray-900 font-bold'>➖</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>1</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>2</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>3</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-red-500 text-gray-900 font-bold'>✖️</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-red-500 text-gray-900 font-bold'>🔚</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>0</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold'>.</button>
                        <button type='button' className='bg-white rounded-lg hover:bg-red-500 text-gray-900 font-bold'>=</button>

                    </div>
                </div>
            </div>




        </div>
    )
}
