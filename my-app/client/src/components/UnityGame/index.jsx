import React, { Fragment } from "react";
import './index.css'
import { Unity, useUnityContext} from "react-unity-webgl";
import { Button } from "@material-ui/core";


function UnityGame() {
    const { unityProvider, loadingProgression, isLoaded, requestFullscreen } = useUnityContext({
        loaderUrl: "/Unity_Build/Build/Unity_Build.loader.js",
        dataUrl: "/Unity_Build/Build/Unity_Build.data/webgl.data",
        frameworkUrl: "/Unity_Build/Build/Unity_Build.framework.js/build.framework.js",
        codeUrl: "/Unity_Build/Build/Unity_Build.wasm/build.wasm",
    });

    function handleClickEnterFullscreen() {
        if (isLoaded)
            requestFullscreen(true);
    }
    return (
        <React.Fragment>
            <Fragment>
                {!isLoaded && (
                    <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
                )}
                <Unity
                    unityProvider={unityProvider}
                    style={{ visibility: isLoaded ? "visible" : "hidden", width: 1000, height: 650 }}
                />

                <div class="unityButtons">
                    <Button variant="contained" onClick={handleClickEnterFullscreen}>Enter Fullscreen</Button>
                </div>
            </Fragment>
        </React.Fragment>
    );
}

export default UnityGame;