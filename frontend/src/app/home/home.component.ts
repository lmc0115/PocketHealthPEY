import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string = '';
  userId: string  = '';
  color: string  = '';
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name") || '';
    this.userId = this.route.snapshot.paramMap.get("userId") || '';
    this.color = this.route.snapshot.paramMap.get("color") || '';
  }


}
