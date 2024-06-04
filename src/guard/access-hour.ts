import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class TimeAccessGuard implements CanActivate {
  
  canActivate(context: ExecutionContext): boolean {
    const actualHour = new Date().getHours();

    if (actualHour >= 18 || actualHour < 7) {
      throw new UnauthorizedException(
        'No more players can register after 7p.m. and before 7am',
      );
    }

    return true;
  }
}
