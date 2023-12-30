import { _decorator, Component, CCBoolean, Label, Node, TextAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Results')
export class Results extends Component {

    @property({ type: Label })
    public currentScoreLabel: Label;

    @property({ type: Label })
    public bestScoreLabel: Label;

    @property({ type: Label })
    public tryAgainLabel: Label;

    private maxScore: number = 0;
    private currentScore: number = 0;

    private readonly reward: number = 1;
    private readonly defaultScore: number = 0;

    public updateScore(newScore: number): void {

        this.currentScore = newScore;
        this.currentScoreLabel.string = `${this.currentScore}`;
    }

    public resetScore(): void {
        
        this.updateScore(this.defaultScore);
        this.hideResult();
    }

    public addScore(): void {
        this.updateScore(this.currentScore + this.reward);
    }

    public showResult(): void {
        this.SetActiveAllLabels(true);
    }

    public hideResult(): void {
        this.SetActiveAllLabels(false);
    }

    private SetActiveAllLabels(active: boolean): void {

        this.bestScoreLabel.enabled = active;
        this.tryAgainLabel.enabled = active;
    }
}