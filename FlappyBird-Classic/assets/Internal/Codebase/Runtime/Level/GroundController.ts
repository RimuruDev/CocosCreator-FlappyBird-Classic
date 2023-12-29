import { _decorator, Component, log, Node, UITransform, Vec3 } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('GroundController')
export class GroundController extends Component {

    @property({ type: Node, })
    public GroundOne: Node;

    @property({ type: Node })
    public GroundTwo: Node;

    @property({ type: Node })
    public GroundThree: Node;

    public GroundWidthOne: number;
    public GroundWidtTwo: number;
    public GroundWidthThree: number;

    public TempStartLocationOne: Vec3 = new Vec3;
    public TempStartLocationTwo: Vec3 = new Vec3;
    public TempStartLocationThree: Vec3 = new Vec3;

    public GameSpeed: number = 50;

    protected onLoad(): void {
        this.StartUp();
    }

    protected start(): void {
    }

    protected update(deltaTime: number): void {
    }

    protected lateUpdate(deltaTime: number): void {

    }

    private StartUp(): void {
        this.GroundWidthOne = this.GroundOne.getComponent(UITransform).width;
        this.GroundWidtTwo = this.GroundTwo.getComponent(UITransform).width;
        this.GroundWidthThree = this.GroundThree.getComponent(UITransform).width;
    }
}