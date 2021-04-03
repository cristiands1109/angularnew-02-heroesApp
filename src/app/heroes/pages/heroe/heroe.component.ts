import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `img{
      width: 100%;
      border-radius: 10px;
    }
    `
  ]
})
export class HeroeComponent implements OnInit {
  
  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private route: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(resp => this.heroeService.getHeroePorID(resp.id)))
      .subscribe(heroe => this.heroe = heroe)
  }


  regresar(){
    this.route.navigate(['/heroes/listado']);
  }

}
