import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { Observable } from 'rxjs';

@Injectable()
export class SelfAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    if (String(req.admin.id) !== req.params.id) {
      throw new ForbiddenException({
        message: 'Ruxsat etilmagan foydalanuvchi',
      });
    }

    return true;
  }
}
