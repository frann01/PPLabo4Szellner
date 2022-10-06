import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modificar-conteiner',
  templateUrl: './modificar-conteiner.component.html',
  styleUrls: ['./modificar-conteiner.component.css']
})
export class ModificarConteinerComponent implements OnInit {

  public forma!: FormGroup;
  @Input() conteiner:any;
  contnuevo:any;

  constructor(private afs : AngularFirestore,private fb: FormBuilder) 
  {
    this.forma = this.fb.group({
      'color': ['', Validators.required, this.spacesValidator],
      'empresa': ['', [Validators.required, this.spacesValidator]],
      'capacidad': ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
  }



  ModificarCon()
  {
    let id = this.afs.createId();
    console.info(id);

        this.afs.collection('conteiners').doc(this.conteiner.id)
        .update({color:this.forma.get('color')!.value,
        empresa:this.forma.get('empresa')!.value,
        capacidad:this.forma.get('capacidad')!.value})
        .then(()=>
    {
      alert("conteiner modificado")
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
