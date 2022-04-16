import { useEffect } from "react";
import Viewer3D from "../../3D/entry";
import "./ObjectWindow.scss";

export default function ObjectWindow() {

    useEffect(() => {
        const viewer = new Viewer3D();
        const canvas = document.getElementById("canvas");

        viewer.setup(canvas);
    })


    return (
        <div className="canvas__container">
            <canvas id="canvas"></canvas>
        </div>
    )
}