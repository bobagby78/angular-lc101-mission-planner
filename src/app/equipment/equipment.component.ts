import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

    equipment=['Habitat dome', 'Drones', 'Food containers', 'O2 Tanks']
  constructor() { }

  ngOnInit() {
  }

}
