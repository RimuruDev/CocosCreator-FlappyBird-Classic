import { _decorator, CCInteger, Component, EventKeyboard, Input, input, Node, KeyCode } from 'cc';
import { GroundController } from './Level/GroundController';
import { Results } from './Level/Results';

const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {

    @property({ type: GroundController })
    public groundController: GroundController;

    @property({ type: Results })
    public results: Results;

    @property({ type: CCInteger })
    public speed: number = 300;

    @property({ type: CCInteger })
    public pipeSpeed: number = 200;

    protected onLoad(): void {

    }

    protected update(deltaTime: number): void {
        this.initListener();
    }

    private initListener(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    private startGame(): void {

    }

    private onKeyDown(event: EventKeyboard): void {

        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.gameOver();
                break
            case KeyCode.KEY_P:
                this.results.addScore();
                break
            case KeyCode.KEY_Q:
                this.resetGame();
                break
        }
    }

    private gameOver(): void {

    }

    private resetGame(): void {

    }
}