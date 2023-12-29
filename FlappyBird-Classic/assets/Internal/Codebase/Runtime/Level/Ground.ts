import { _decorator, Component, log, Node } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {

    @property({
        type: Node,
        displayName: 'Ground',
        tooltip: 'Ground one is here!'
    })

    protected start(): void {
    }

    protected update(deltaTime: number): void {

    }

    protected lateUpdate(dt: number): void {

    }

}