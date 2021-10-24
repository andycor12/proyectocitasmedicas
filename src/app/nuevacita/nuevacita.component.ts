import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import Swal from  'sweetalert2';

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent implements OnInit {

  nuevaform:FormGroup
 
 constructor(private formBuilder: FormBuilder) {
   this.nuevaform = this.formBuilder.group({
     asunto: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
     paciente: ['', [Validators.required]],//select
     medico: ['', [Validators.required]],//select
     fecha: ['', Validators.required], //date
     nota: ['', [Validators.required]],
     enfermedad: ['', [Validators.required]],
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
