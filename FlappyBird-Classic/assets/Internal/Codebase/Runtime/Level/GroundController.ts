import { _decorator, Canvas, Component, director, Node, UITransform, Vec3 } from 'cc';
import { GameController } from '../GameController';

const { ccclass, property } = _decorator;

@ccclass('GroundController')
export class GroundController extends Component {

    @property({ type: Node })
    public groundOne: Node;

    @property({ type: Node })
    public groundTwo: Node;

    @property({ type: Node })
    public groundThree: Node;

    public gameController: GameController = new GameController;

    private gameSpeed: number;
    private groundWidths: number[] = [];
    private tempStartLocations: Vec3[] = [];

    protected onLoad(): void {

        [this.groundOne, this.groundTwo, this.groundThree].forEach((ground, index) => {

            const width = ground.getComponent(UITransform).width;

            this.groundWidths.push(width);
            this.tempStartLocations.push(new Vec3(index * width, 0, 0));

            ground.setPosition(this.tempStartLocations[index]);
        });
    }

    protected update(deltaTime: number): void {

        this.gameSpeed = this.gameController.speed;

        const delta: number = this.gameSpeed * deltaTime;
        const canvasWidth = director.getScene().getComponentInChildren(Canvas).getComponent(UITransform).width;

        this.tempStartLocations.forEach((location, index) => {

            location.x -= delta;
            if (location.x <= (-this.groundWidths[index]))
                location.x = canvasWidth;

            this.groundOne.setPosition(this.tempStartLocations[0]);
            this.groundTwo.setPosition(this.tempStartLocations[1]);
            this.groundThree.setPosition(this.tempStartLocations[2]);
        });
    }
}