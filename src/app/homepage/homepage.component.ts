import { Component, OnInit } from '@angular/core';
import { ApiService, User} from '../services/api.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  getMatchHistory(){
    let data: User;
    this.apiService.getUser().subscribe((result: User) => {
      this.apiService.getMatchHistory(result.accountId).subscribe((data) => {
        console.log(data)
      })
    })
    
  }

}