import { useRef } from 'react';

export default function AnimatedComponent() {

    const coloredBox = useRef(null)
    console.log(coloredBox);


    const changeBoxColor = () => {
        // función de cambio de color
        coloredBox.current.style.backgroundColor = getRandomColor();
    };

    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <div className="rounded-lg border border-slate-400 mt-12 p-8 dark:border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-6">
                Caja de colores
            </h2>

            <div className="flex justify-center gap-14 items-center background-red">
                {/* BOX */}
                <div ref={coloredBox}
                    className="size-40 border border-slate-300 rounded-lg" // referenciar esta caja
                ></div>

                <div>
                    <p>Clickea el boton para cambiar de color</p>
                    <button
                        onClick={changeBoxColor}
                        className="rounded mt-6 py-2 px-4 bg-indigo-600 text-slate-200 dark:bg-indigo-400"
                    >
                        Haz la magia!
                    </button>
                </div>
            </div>
        </div>
    );
}
