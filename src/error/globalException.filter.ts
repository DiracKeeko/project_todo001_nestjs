import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      code: status,
      message: (exception as RuntimeException).message || 'Internal Error',
      timestamp: new Date().toISOString(),
      path: request.url
    });

    // ↓ 输出错误信息
    console.error(`Exception: ${exception}, errorRequestPath: ${request.url}`);
  }
}
