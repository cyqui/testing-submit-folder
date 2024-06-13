import { Component } from '@angular/core';
import {MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-stop-and-delete-prompt',
  templateUrl: './stop-and-delete-prompt.component.html',
  styleUrl: './stop-and-delete-prompt.component.scss',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class StopAndDeletePromptComponent {

  noAction() {
    alert('Not implemented');
  }
}
