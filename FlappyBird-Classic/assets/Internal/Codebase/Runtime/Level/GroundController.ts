import { _decorator, Canvas, Component, director, log, Node, UITransform, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('GroundController')
export class GroundController extends Component {

    @property({ type: Node, })
    public groundOne: Node;

    @property({ type: Node })
    public groundTwo: Node;

    @property({ type: Node })
    public groundThree: Node;

    public groundWidthOne: number;
    public groundWidtTwo: number;
    public groundWidthThree: number;

    public tempStartLocationOne: Vec3 = new Vec3;
    public tempStartLocationTwo: Vec3 = new Vec3;
    public tempStartLocationThree: Vec3 = new Vec3;

    @property({ type: Number })
    public gameSpeed: number = 50;

    protected onLoad(): void {
        this.startUp();
    }

    protected start(): void {
    }

    protected update(deltaTime: number): void {

        this.tempStartLocationOne = this.groundOne.position;
        this.tempStartLocationTwo = this.groundTwo.position;
        this.tempStartLocationThree = this.groundThree.position;

        var delta: number = this.gameSpeed * deltaTime;
        this.tempStartLocationOne -= delta;
        this.tempStartLocationTwo -= delta;
        this.tempStartLocationThree -= delta;

        const scene = director.getScene();
        const canvas = scene.getComponentInChildren(Canvas);

        if (this.tempStartLocationOne.x <= (0 - this.groundWidthOne)) {

            this.tempStartLocationOne.x =canvas.getComponent(UITransform).width;
        }

        this.groundOne.setPosition(this.tempStartLocationOne);
        this.groundTwo.setPosition(this.tempStartLocationTwo);
        this.groundThree.setPosition(this.tempStartLocationThree);
    }

    protected lateUpdate(deltaTime: number): void {

    }

    private startUp(): void {

        this.groundWidthOne = this.groundOne.getComponent(UITransform).width;
        this.groundWidtTwo = this.groundTwo.getComponent(UITransform).width;
        this.groundWidthThree = this.groundThree.getComponent(UITransform).width;

        this.tempStartLocationOne.x = 0;
        this.tempStartLocationTwo.x = this.groundWidthOne;
        this.tempStartLocationThree.x = this.groundWidthOne + this.groundWidthThree;

        this.groundOne.setPosition(this.tempStartLocationOne);
        this.groundTwo.setPosition(this.tempStartLocationTwo);
        this.groundThree.setPosition(this.tempStartLocationThree);
    }
}