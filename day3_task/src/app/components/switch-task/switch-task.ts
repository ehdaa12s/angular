import { Component } from '@angular/core';

type TaskType = 'Success' | 'Error' | 'Warning' | 'Info';

@Component({
  selector: 'app-switch-task',
  // imports: [],
  templateUrl: './switch-task.html',
})
export class SwitchTask {
  type: TaskType = 'Success';

  changeType(type: TaskType) {
    this.type = type;
  }
}
