import { useState, useEffect } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import herPhoto from "./assets/kavu.jpeg";
import romanticMusic from "./assets/munji.mp3";

export default function App() {
    const [noCount, setNoCount] = useState(0);
    const [yesPressed, setYesPressed] = useState(false);
    const [noEscaped, setNoEscaped] = useState(false);
    const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });
    const [showNiceTry, setShowNiceTry] = useState(false);

    useEffect(() => {
        if (yesPressed) {
            const audio = new Audio(romanticMusic);
            audio.loop = true;
            audio.volume = 0.4;
            audio.play();

            return () => {
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [yesPressed]);

    const yesButtonSize = noCount * 20 + 16;

    const moveNoButton = () => {
        const top = Math.random() * 70 + 10;
        const left = Math.random() * 70 + 10;

        setNoEscaped(true);
        setNoPosition({ top: `${top}%`, left: `${left}%` });
        setNoCount(noCount + 1);

        setShowNiceTry(true);
        setTimeout(() => setShowNiceTry(false), 1200);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Really sure?",
            "Think again!",
            "Last chance!",
            "Plsss? 😜",
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="relative overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 text-zinc-900">
            {yesPressed ? (
                <>
                    <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
                    <div className="text-4xl md:text-6xl font-bold my-4">
                        Ok Yayyyyy!!! ❤️
                    </div>
                </>
            ) : (
                <>
                    <img src={lovesvg} className="fixed animate-pulse top-10 left-6 w-28" />
                    <img src={lovesvg2} className="fixed bottom-16 right-10 w-32" />

                    <img className="h-[230px] rounded-lg shadow-lg" src={herPhoto} />
                    <h1 className="text-4xl md:text-6xl my-4 text-center">
                        Will you be my Valentine? kanzuu Darling
                    </h1>

                    {showNiceTry && (
                        <div className="text-rose-600 font-semibold mb-2 animate-bounce">
                            Nice try 😜
                        </div>
                    )}

                    <div className="flex gap-4 mt-4">
                    <button
                        className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg"
                        style={{ fontSize: yesButtonSize }}
                        onClick={() => setYesPressed(true)}
                    >
                        Yes
                    </button>

                    <button
                        onMouseEnter={moveNoButton}
                        onTouchStart={moveNoButton}
                        style={
                            noEscaped
                                ? {
                                    position: "absolute",
                                    top: noPosition.top,
                                    left: noPosition.left,
                                }
                                : {}
                        }
                                className="bg-rose-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300">

                        {getNoButtonText()}
                    </button>

                    </div>
                </>
            )}
        </div>
    );
}
