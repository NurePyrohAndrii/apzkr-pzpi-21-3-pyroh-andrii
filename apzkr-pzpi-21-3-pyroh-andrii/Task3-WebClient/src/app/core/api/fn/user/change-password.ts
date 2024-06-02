/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiResponseString } from '../../models/api-response-string';
import { ChangePasswordRequest } from '../../models/change-password-request';

export interface ChangePassword$Params {
      body: ChangePasswordRequest
}

export function changePassword(http: HttpClient, rootUrl: string, params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiResponseString>> {
  const rb = new RequestBuilder(rootUrl, changePassword.PATH, 'patch');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiResponseString>;
    })
  );
}

changePassword.PATH = '/api/v1/users';
