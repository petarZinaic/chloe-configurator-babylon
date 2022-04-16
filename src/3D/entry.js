import { Scene, Engine, FreeCamera, Vector3 } from "babylonjs";

export default class Viewer3D {

    setup = (canvas) => {

        const engine = new Engine(canvas);
        const scene = new Scene(engine);

        const camera = new FreeCamera("camera", new Vector3(0, 5, -10), scene);
        camera.attachControl(true);

        engine.runRenderLoop(() => {
            scene.render();
        });

    }
}

