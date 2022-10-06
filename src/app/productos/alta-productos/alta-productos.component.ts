import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-alta-productos',
  templateUrl: './alta-productos.component.html',
  styleUrls: ['./alta-productos.component.css']
})
export class AltaProductosComponent implements OnInit {

  public forma!: FormGroup;
  constructor(private afs : AngularFirestore,private fb: FormBuilder) 
  {
    this.forma = this.fb.group({
      'descripcion': ['', [Validators.required, this.spacesValidator]],
      'codigo': ['', Validators.required],
      'stock': ['', [Validators.required, Validators.min(0)]],
      'precio': ['', [Validators.required, Validators.min(0)]],
      'comestible': ['', Validators.required],
      'pais': ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  pais:any=null;
  descripcion:string='';
  codigo:string='';
  stock:string='';
  precio:string='';
  comestible:any={};
  producto:any={}
  pais_nombre='';

  TomoPaisSeleccionado($event:any)
  {
    this.pais=$event;
    console.info(this.pais)
    this.pais_nombre = this.pais.name.common
  }

  agregarProd()
  {
    let id = this.afs.createId();
    console.info(id);
    this.producto =
    {
      descripcion: this.forma.get('descripcion')!.value,
      codigo:this.forma.get('codigo')!.value,
      stock:this.forma.get('stock')!.value,
      comestible:this.forma.get('comestible')!.value,
      precio:this.forma.get('precio')!.value,
      pais:this.pais,
    }
    console.log(this.forma.get('pais')!.value)
    this.afs.collection('/productos').add(this.producto).then(()=>
    {
      alert("producto agregado")
    })
  }


  private spacesValidator(control: AbstractControl): null | object {
    const palabra = <string>control.value;
    const spaces = palabra.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

}
