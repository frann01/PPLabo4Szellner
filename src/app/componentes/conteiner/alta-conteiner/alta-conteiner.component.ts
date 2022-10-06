import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-conteiner',
  templateUrl: './alta-conteiner.component.html',
  styleUrls: ['./alta-conteiner.component.css']
})
export class AltaConteinerComponent implements OnInit {

  public forma!: FormGroup;
  @Output() nuevoCpnt?: EventEmitter<any> = new EventEmitter<any>();

  constructor(private afs : AngularFirestore,private fb: FormBuilder) 
  {
    this.forma = this.fb.group({
      'codigo': ['', [Validators.required, this.spacesValidator]],
      'color': ['', Validators.required, this.spacesValidator],
      'empresa': ['', [Validators.required, this.spacesValidator]],
      'capacidad': ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
  }

  conteiner:any;


  agregarCon()
  {
    let id = this.afs.createId();
    console.info(id);
    this.conteiner =
    {
      id:id,
      color: this.forma.get('color')!.value,
      codigo:this.forma.get('codigo')!.value,
      empresa:this.forma.get('empresa')!.value,
      capacidad:this.forma.get('capacidad')!.value,
    }
    this.afs.collection('conteiners').doc(id).set(this.conteiner).then(()=>
    {
      alert("conteiner agregado")
      this.nuevoCpnt.emit(this.conteiner)
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
