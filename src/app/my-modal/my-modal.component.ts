// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-my-modal',
//   templateUrl: './my-modal.component.html',
//   styleUrls: ['./my-modal.component.scss']
// })
// export class MyModalComponent {
// }
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
})
export class MyModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}

