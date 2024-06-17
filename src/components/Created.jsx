import React from "react";
import Lottie from "lottie-react";
import v from "./animações/v.json";

function Created({ styleAnimation, animationRef }) {
    return (
        <div>
            <Lottie
                animationData={v}
                style={styleAnimation}
                lottieRef={animationRef}
                autoplay={true}
            />
        </div>
    );
}

export default Created;
