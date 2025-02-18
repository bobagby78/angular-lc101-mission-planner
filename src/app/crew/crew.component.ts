import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

    memberBeingEdited: object = null;

    crew: object[] = [
      {name: "Eileen Collins", firstMission: false},
      {name: "Mae Jemison", firstMission: false},
      {name: "Ellen Ochoa", firstMission: true}
    ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirstMission: boolean){
//       for(let i = 0; i < this.crew.length; i++){
//         if (this.crew.name !== memberName){
//             this.crew.push({name: memberName, firstMission: isFirstMission});
//         }
//       }
    this.crew.push({name: memberName, firstMission: isFirstMission});
  }

  remove(crewMember){
    let index = this.crew.indexOf(crewMember);
    this.crew.splice(index, 1);
  }

  edit(member:object){
    this.memberBeingEdited = member;
  }

  save(name:string, member: object){
    member['name'] = name;
    this.memberBeingEdited = null
  }

}
