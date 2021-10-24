import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import Swal from  'sweetalert2';

@Component({
  selector: 'app-nuevausuarios',
  templateUrl: './nuevausuarios.component.html',
  styleUrls: ['./nuevausuarios.component.css']
})
export class NuevausuariosComponent implements OnInit {
 usersform:FormGroup
 
  constructor(private formBuilder: FormBuilder) {
    this.usersform = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      nick: ['', [Validators.required]],//select
      email: ['', [Validators.required]],//select
      estado: ['', [Validators.required]], //date
      c1: ['', [Validators.required]],
      c2: ['', [Validators.required]],
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
