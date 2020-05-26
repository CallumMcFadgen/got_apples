import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-growers',
  templateUrl: './growers.page.html',
  styleUrls: ['./growers.page.scss'],
})
export class GrowersPage implements OnInit {

  loading: any;
  data ;
  error: string;
  user_name: string;

  constructor(private http: HttpClient, public loadingController: LoadingController) {
    this.data = [];
    this.error = '';
    this.user_name = 'Kal';
  }

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    // start loading spinner
    await this.presentLoading();
    // GET request
    this.getAllUsers()
      .pipe(
        finalize(async () => {
          // stop loading spinner on finish
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          // Set the data to an array
          this.data = data;
          console.log(data);
        },
        err => {
          // Set error information to display in the template
          this.error = `Get users failed: Status: ${err.status}, Message: ${err.statusText}`;
        }
      );
  }

  // loading spinner
  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Loading data...'
    });
    await this.loading.present();
  }

  // API URL
  private getAllUsers(): Observable<object> {
    const dataUrl = 'http://localhost:3333/get_user/' + this.user_name;
    console.log(dataUrl);
    return this.http.get(dataUrl);
  }

  // 'https://api.nigelbpeck.com/'
  // http://localhost:3333/get_user/Kal


}
