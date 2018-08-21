import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input() isBig: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogo() {
    this.router.navigate(['/']);
  }

}
