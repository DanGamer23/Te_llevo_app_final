import { Injectable } from '@angular/core';
import { viaje_con } from '../modelo/viaje_con'; 
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudviajeConService {

  constructor(private afs:AngularFirestore) { }

  grabar(viaje_con :viaje_con){
    return this.afs.collection('viaje_con').add(viaje_con);
  }
  
  listar(): Observable<viaje_con[ ]>{
    return this.afs.collection<viaje_con>('viaje_con').valueChanges({idField:'id'})
  }

  eliminar(id:string){
    return this.afs.collection('viaje_con').doc(id).delete( );
  }
}
