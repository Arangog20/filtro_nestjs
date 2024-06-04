import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class TimeAccessGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
