import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { from } from 'rxjs';
import { global } from '../../services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {


  public status: string;
  public filestoUpload: Array<File>;
  public title: string;
  public project: Project;
  constructor(
    private _projectService: ProjectService,
    private _upLoadService: UploadService

  ) {
    this.title = "Crear Proyecto";
    this.project = new Project("", "", "", "", "", 2019, "");

  }

  ngOnInit() {
  }
  onSubmit(form) {


    //GUARDAR DATOS
    this._projectService.savedProject(this.project).subscribe(
      response => {
        if (response.project) {
          //SUBIR IMAGENlocalhost:3700/api/subirImagen
      
          this._upLoadService.makeFileRequest(global.url + 'subirImagen/' + response.project._id, [], this.filestoUpload, 'image').then((result: any) => {
            console.log(result);
            this.status = "success";

            form.reset();
          });

        } else {
          this.status = "failed";
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
  fileChangeEvent(fileInput: any) {
    this.filestoUpload = <Array<File>>fileInput.target.files;
  }



}
