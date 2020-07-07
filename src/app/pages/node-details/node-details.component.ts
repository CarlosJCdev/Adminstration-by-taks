import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/share/note.model';
import { NotesService } from 'src/app/share/notes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.scss']
})
export class NodeDetailsComponent implements OnInit {
  note: Note;
  noteId: number;
  new: boolean;

  constructor(private noteService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Para editar una nota debemos saber la ruta (definidas en el roting-module)
    this.route.params.subscribe((params: Params)=>{
      this.note= new Note();
      if(params.id){
        this.note= this.noteService.get(params.id);
        this.noteId= params.id;
        this.new= false;
      }else{
        this.new= true;
      }
    })

  }


  onSubmit(form: NgForm){
    if(this.new){
    this.noteService.add(form.value);
  }else{
    this.noteService.update(this.noteId, form.value.title, form.value.body);
  }
  this.router.navigateByUrl('/');
}
  cancel(){
    this.router.navigateByUrl('/');
  }

}
