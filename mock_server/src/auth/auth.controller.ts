import { Controller, Post, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';


interface LoginRequest {
    email: string,
    password: string
}

interface LoginResponse {
    access: string
    refresh: string
}

interface AccountResponse {
    id: number
    email: string
    username: string
    phone: string
    icon: string | null
}


@Controller('api/v1/auth')
export class AuthController {

    constructor(private jwtService: JwtService) { }

    @Post('login')
    getAllNotes(@Req() request: Request): LoginResponse {
        const body: LoginRequest = <LoginRequest>request.body;
        const payload = { username: body.email, sub: 1 };
        return {
            access: this.jwtService.sign(payload),
            refresh: this.jwtService.sign(payload),
        };
    }

    @Get('account')
    getAccount(@Req() request: Request): AccountResponse {
        return {
            id: 1,
            email: 'test@test.com',
            username: 'username',
            phone: '0674227484',
            icon: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg'
        };
    }
}
