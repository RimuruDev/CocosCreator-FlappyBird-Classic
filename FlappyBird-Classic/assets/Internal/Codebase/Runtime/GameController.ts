import { _decorator, CCInteger, Component, EventKeyboard, Input, input, Node, KeyCode, director } from 'cc';
import { GroundController } from './Level/GroundController';
import { Results } from './Level/Results';

const { ccclass, property } = _decorator;
const DEBUG_MODE = true;

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

        this.initListener();
        this.results.resetScore();
        director.pause();
    }

    protected update(deltaTime: number): void {

    }

    private initListener(): void {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    private startGame(): void {

        this.results.hideResult();
        director.resume();
    }

    private onKeyDown(event: EventKeyboard): void {

        if (!DEBUG_MODE)
            return;

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

        this.results.showResult();
        director.pause();
    }

    private resetGame(): void {

        this.results.resetScore();
        this.startGame();
    }
}