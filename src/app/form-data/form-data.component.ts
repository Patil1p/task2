import { Component } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {
  changeVal(eve : any){
    console.log(eve.target.value)
    if(eve.target.value === 'email'){
      document.getElementById('EmailId')?.classList.remove('d-none')
      document.getElementById('Phone')?.classList.add('d-none')
    }
    else if(eve.target.value === 'phone'){
      document.getElementById('EmailId')?.classList.remove('d-none')
      document.getElementById('Phone')?.classList.add('d-none')
    }
}
}
