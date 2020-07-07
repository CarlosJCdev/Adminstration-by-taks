import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  //Con el formulario creado, tenemos que crear un array donde guardaremos las notas que se vallan creando
  notes: Note[]= new Array<Note>();

  constructor() { }

  //Crear metodos para administrar los datos que estaran dentro de la matriz
  get(id: number){
     return this.notes[id];
  }
  getAll(){
    return this.notes;
  }
 getId(note: Note){
   return this.notes.indexOf(note);
 }
 add(note: Note){
   let newLength= this.notes.push(note);
   let index= newLength -1;
   return index;
 }
 update(id: number, title: string, body: string){
   let note= this.notes[id];
   note.title= title;
   note.body= body;
 }
 delete(id: number){
   this.notes.splice(id, 1);
 }
}
