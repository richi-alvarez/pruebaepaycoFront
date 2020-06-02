import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { WhalletService } from '../../services/whallet.service';
import { Whallet } from '../../models/whallet';

@Component({
  selector: 'app-whallet-consulta',
  templateUrl: './whallet-consulta.component.html',
  styleUrls: ['./whallet-consulta.component.css'],
  providers: [UserService, WhalletService]
})
export class WhalletConsultaComponent implements OnInit {
  public page_title:string;
  public identity;
  public token;
  public whallet: Whallet;
  public status;
  public saldo;
  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService: UserService,
    private _whalletService: WhalletService
  ) {
    this.page_title = "consultar saldo";
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
   }

  ngOnInit(): void {
    this.whallet = new Whallet(1, this.identity.sub, 0,'','',null)
  }
  onSubmit(form){
    console.log(this.token,this.whallet)
    this._whalletService.consultar(this.token, this.whallet).subscribe(
        response => {
          console.log("reponse",response);
          if(response.status == 'success'){
            this.status = 'success';
            this.saldo =response.saldo;
           // this._router.navigate(['/inicio']);
          }else{
            this.status = 'error';
            this.saldo = 0;
          }
        },
        error=>{
          this.status = 'error';
          console.error(error);
        }  
    );
  }

}
