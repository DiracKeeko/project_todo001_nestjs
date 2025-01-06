import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Response<T> {
  data: T;
}

@Injectable()
export class TransformResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          returnInfo: {
            returnCode: 'SUC0000',
            message: '成功'
          }
        };
      })
    );
  }
}
