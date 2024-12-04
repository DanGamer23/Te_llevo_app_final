import { Injectable } from '@angular/core';
import { item } from '../modelo/item';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CruditemService {

  constructor(private afs:AngularFirestore) { }

  grabar(item :item){
    return this.afs.collection('item').add(item);
  }
  listar(): Observable<item[]>{
    return this.afs.collection<item>('item').valueChanges({idField:'id'})
  }
}
