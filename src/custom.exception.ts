import { HttpException, HttpStatus } from '@nestjs/common';

//TODO: just class to handle http exception
export class CustomException extends HttpException {
constructor() {
super('Custom message', HttpStatus.BAD_REQUEST);
}
}