export class AuthService {
  loggedIn = false;

  public isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800)
      }
    );
    console.log(this.loggedIn);
    return promise;
  }
  public login() {
    this.loggedIn = true;
  }

  public logout() {
    this.loggedIn = false;
  }
}