import React from "react";
import Lottie from "lottie-react";
import v from "../animações/v.json";

function Created({ styleAnimation, animationRef, setAnimacao }) {
    const handleLoopComplete = () => {
        setAnimacao(false);
    };

    return (
        <div>
            <Lottie
                animationData={v}
                style={styleAnimation}
                lottieRef={animationRef}
            />
        </div>
    );
}

export default Created;
