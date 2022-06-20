import React, { useEffect, useState } from 'react'


export function Calculadora() {
    const [numero, setNumero] = useState("")
    const [resultado, setResultado] = useState("")
    const styleButton = {
        number:"bg-white rounded-lg hover:bg-yellow-300 text-gray-900 font-bold",
        operator:"bg-white rounded-lg hover:bg-orange-500 text-gray-900 font-bold",
    }



    const logica = (e) => {
        const num = e.target.value
        setResultado(0)

        setNumero(numero + num)
try {
    
    if (num === "delete") {
        limpiar()
        return
    }

    if (num === "=") {
        setResultado(eval(numero))
        limpiar()
        return
    }
} catch (error) {
    window.alert("Error en la operacion")
    limpiar()
    setResultado(0)

}





    }


    const limpiar = () => {
        setNumero("")
    }



    return (
        <div className='flex flex-col items-center'>


            <div className="p-6 bg-white w-56 rounded-lg border  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h5 className="text-3xl font-bold text-center mb-5 text-gray-900 dark:text-white">Calculadora</h5>


                <div className="mb-2">
                    <input
                        type="text"
                        value={resultado ? resultado : numero}
                        className="w-full text-right p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        disabled
                    />
                </div>


                <div>
                    <div className="grid gap-2 grid-cols-4 text-blue-50">
                        <button type='button' value="7" onClick={logica} className={styleButton.number}>7</button>
                        <button type='button' value="8" onClick={logica} className={styleButton.number}>8</button>
                        <button type='button' value="9" onClick={logica} className={styleButton.number}>9</button>
                        <button type='button' value="/" onClick={logica} className={styleButton.operator}>➗</button>
                        <button type='button' value="4" onClick={logica} className={styleButton.number}>4</button>
                        <button type='button' value="5" onClick={logica} className={styleButton.number}>5</button>
                        <button type='button' value="6" onClick={logica} className={styleButton.number}>6</button>
                        <button type='button' value="-" onClick={logica} className={styleButton.operator}>➖</button>
                        <button type='button' value="1" onClick={logica} className={styleButton.number}>1</button>
                        <button type='button' value="2" onClick={logica} className={styleButton.number}>2</button>
                        <button type='button' value="3" onClick={logica} className={styleButton.number}>3</button>
                        <button type='button' value="+" onClick={logica} className={styleButton.operator}>✖️</button>
                        <button type='button' value="delete" onClick={logica} className={styleButton.operator}>🔚</button>
                        <button type='button' value="0" onClick={logica} className={styleButton.number}>0</button>
                        <button type='button' value="." onClick={logica} className={styleButton.number}>.</button>
                        <button type='button' value="=" onClick={logica} className={styleButton.operator}>=</button>

                    </div>
                </div>
            </div>




        </div>
    )
}
