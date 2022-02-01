import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event$: Observable<Event> = this.ar.params.pipe(
    switchMap(params => this.eventService.get(params['id'])),
  );

  constructor(
    private eventService: EventService,
    private ar: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
  }

  onUpdate(eventForm: NgForm): void {
    this.eventService.update(eventForm.value).subscribe(
      reply => console.log(reply))

}

}
