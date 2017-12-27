export class AuthService {
  loggedIn = false;

  public isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isLoggedIn());
        }, 800)
      }
    );
    console.log(this.loggedIn);
    return promise;
  }

  public isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}