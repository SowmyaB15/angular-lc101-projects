import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Call mom'];//['Complete LaunchCode prep work', 'Buy groceries', 'Empty dishwasher', 'clean bathroom'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Empty dishwasher', 'clean bathroom'];
   // prepWork = ['prep work', 'concept check'];
   trophyImage = 'https://img.pixers.pics/pho_wat(s3:700/FO/53/88/62/97/700_FO53886297_e4fad572cb0f2b9f1499505d28c7fbeb.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/wall-murals-vector-illustration-of-cartoon-trophy.jpg.jpg';

   constructor() { }

   ngOnInit() {
   }

}
