import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [ProjectService]
})
export class DetalleComponent implements OnInit {
  public url: string;
  public project: Project;
  constructor(
    private _ProjectServices: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.url;
  }


  getProject(ids) {
    this._ProjectServices.getProject(ids).subscribe(response => {
      this.project = response.project;
    },

      error => {
        console.log(<any>error);
      });

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProject(id);

    });
  }

}
