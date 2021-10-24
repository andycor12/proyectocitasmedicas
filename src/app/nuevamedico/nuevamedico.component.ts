import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import Swal from  'sweetalert2';

@Component({
  selector: 'app-nuevamedico',
  templateUrl: './nuevamedico.component.html',
  styleUrls: ['./nuevamedico.component.css']
})
export class NuevamedicoComponent implements OnInit {

  medform:FormGroup
 
 constructor(private formBuilder: FormBuilder) {
   this.medform = this.formBuilder.group({
     area: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
     nombre: ['', [Validators.required]],//select
     apellido: ['', [Validators.required]],//select
     direccion: ['', Validators.required], //date
     email: ['', [Validators.required]],
     telefono: ['', [Validators.required]],
   });
 }
  ngOnInit(): void {
  }
  showModal(){
    Swal.fire({
      title: 'Completado?',
      text: 'Que bien Ingresastes los datos completos',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Guardado!',
          'Datos completado.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No eliminar los datos del formulario :)',
          'error'
        )
      }
    })
    
  }
}
