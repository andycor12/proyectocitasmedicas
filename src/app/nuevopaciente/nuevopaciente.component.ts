import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import Swal from  'sweetalert2';
@Component({
  selector: 'app-nuevopaciente',
  templateUrl: './nuevopaciente.component.html',
  styleUrls: ['./nuevopaciente.component.css']
})
export class NuevopacienteComponent implements OnInit {

  pacNueva:FormGroup
 
  constructor(private formBuilder: FormBuilder) {
    this.pacNueva = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      apellido: ['', [Validators.required]],//text
      genero: ['', [Validators.required]],//radiobutton
      fecha: ['', Validators.required], //date
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required]],
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
