import { FunnyCircle } from "./FunnyCircle";

export class Command {


  target: FunnyCircle;

  constructor(target: FunnyCircle) {
    this.target = target;
  }

  add(param: string, initialValue: number) {
    const range = document.querySelector<HTMLInputElement>('.command input.' + param);
    const div = document.querySelector('div.' + param);

    range.valueAsNumber = initialValue;
    div.innerHTML = initialValue + '';

    range.addEventListener('input', (event) => {
      const value = event.target['valueAsNumber'] as number;
      console.log('value', value);
      div.innerHTML = value + '';
      const options = {

      };
      options[param] = value;
      this.target.configure(options);
      this.target.draw();
    });
  }

  addCheckBox(param: string, initialValue: boolean) {
    const checkBox = document.querySelector<HTMLInputElement>('.command input.' + param);

    checkBox.checked = initialValue;

    checkBox.addEventListener('input', (event) => {
      const value = (event.target as HTMLInputElement).checked;
      console.log('value', value);
      const options = {

      };
      options[param] = value;
      this.target.configure(options);
      this.target.draw();
    });
  }

}

