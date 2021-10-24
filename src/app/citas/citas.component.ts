import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citasform:FormGroup
   // busqueda:new FormControl(),
  //  paciente:new FormControl(),
   // medico:new FormControl(),
   // fecha:new FormControl(),

  //});

  constructor(private formBuilder: FormBuilder) {
    this.citasform = this.formBuilder.group({
      busqueda: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      paciente: ['', [Validators.required]],//select
      medico: ['', [Validators.required]],//select
      fecha: ['', Validators.required] //date
    });
  }

  ngOnInit(): void {
  }

 





}
