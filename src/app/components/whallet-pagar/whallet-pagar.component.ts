import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { WhalletService } from '../../services/whallet.service';
import { Whallet } from '../../models/whallet';

@Component({
  selector: 'app-whallet-pagar',
  templateUrl: './whallet-pagar.component.html',
  styleUrls: ['./whallet-pagar.component.css'],
  providers: [UserService, WhalletService]
})
export class WhalletPagarComponent implements OnInit {
  public page_title: string;
  public identity;
  public token;
  public whallet: Whallet;
  public status;
  public status2;
  public sesionId;
  public messagge;
  public tokenPay;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService: UserService,
    private _whalletService: WhalletService
  ) { 
    this.page_title = "Pagar";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.whallet = new Whallet(1, this.identity.sub, 0,'','',null)
  }
  onSubmit(form){
    console.log("pay",this.whallet)
    if(this.whallet.token){
      console.log("pay in")
      this._whalletService.confirmar(this.token, this.whallet).subscribe(
        response => {
          if(response.status == 'success'){
            console.log(response);
            this.status2 = 'success';
            localStorage.removeItem('idSession');
            //this._router.navigate(['/inicio']);
          }else{
            this.status2 = 'error';
          }
        },
        error=>{
          this.status2 = 'error';
          console.error(error);
        }  
    );
    }else{
      this._whalletService.pagar(this.token, this.whallet).subscribe(
          response => {
            if(response.status == 'success'){
              console.log(response.message);
              this.status = 'success';
              this.sesionId =response.id_session;
              this.messagge =response.message;
              this.tokenPay =response.token;
              localStorage.setItem('idSession', response.id_session);
              //this._router.navigate(['/inicio']);
            }else{
              this.status = 'error';
            }
          },
          error=>{
            this.status = 'error';
            console.error(error);
          }  
      );
    }
  }


}
