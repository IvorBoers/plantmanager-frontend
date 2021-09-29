import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {AppConstants} from "./app-constants";

export class AbstractPlantManagerService {


  constructor(protected http: HttpClient, private serviceUrl: string) {
  }


  getApiUrl() {
    return AppConstants.API_URL + "/" + this.serviceUrl;
  }

  getUrl(urlPart: string=''): string {
    return this.getApiUrl() + urlPart;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (error.status == 400) {
        return throwError("Unsuccesful call:" + error.error.error_message)
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
