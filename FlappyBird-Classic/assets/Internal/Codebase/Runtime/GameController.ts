import { _decorator, CCInteger, Component, Node } from 'cc';
import { GroundController } from './Level/GroundController';

const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {

    @property({ type: GroundController })
    public groundController: GroundController;

    @property({ type: CCInteger })
    public speed: number = 300;

    @property({ type: CCInteger })
    public pipeSpeed: number = 200;

    protected onLoad(): void {

    }

    protected update(deltaTime: number): void {

    }

    private initListener(): void {

    }

    private startGame(): void {

    }
}