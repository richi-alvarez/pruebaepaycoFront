import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  constructor(
    private _userService: UserService
  ) {
    this.page_title = "registro";
    this.user = new User(1, '',0, '', 0, '', '');
  }
   

  ngOnInit(): void {
    console.log(this.user)
    console.log(this._userService.prueba());
  }
  onSubmit(form){
    this._userService.register(this.user).subscribe(
      response => {
        console.log(response)
          if(response.status == 'success'){
            this.status = 'success';
            form.reset();
          }else{
            console.log('error dentro')
            this.status = 'error';
          }
      },
      error =>{
        console.log(error)
        this.status = 'error';
        console.log(error);
      }
    );
  }

}
