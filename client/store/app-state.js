import { observable, computed, action } from 'mobx';

export class Appstate {
  @observable count = 0
  @observable name = 'lzt'
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
  @action changeName(name) {
    this.name = name;
  }
}

const appState = new Appstate();

export default appState;
