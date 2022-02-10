import { action, makeAutoObservable, makeObservable, observable } from "mobx";

class Count {
  number: number = 0;

  private static instance: Count;

  private constructor() {
    // makeObservable(this, {
    //   number: observable,
    //   increase: action,
    //   decrease: action,
    // });
    makeAutoObservable(this);
  }

  static getInstance = () => {
    if (Count.instance) {
      return Count.instance;
    }
    Count.instance = new Count();
    return Count.instance;
  };

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
}

const countStore = Count.getInstance();
export default countStore;
