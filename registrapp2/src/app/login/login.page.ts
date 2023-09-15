import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {

  }

  public mensaje=""

  user = {
    usuario: "",
    password: ""
  }

  
  iniciarSesion() {
      this.router.navigate(['/iniciar-sesion']);
  }

  recuperarContrasena() {
      this.router.navigate(['/recuperar-contrasena']);
}

}
