import { GraphQLError } from 'graphql';
import { HttpException, HttpStatus,  } from '@nestjs/common';

export default {

  SUCCESS(msg?:any){
    return msg
  },

  BADREQUEST(msg?:string){
    throw new HttpException(msg,HttpStatus.BAD_REQUEST)
  },

  FORBIDDEN(msg='没有权限，请稍后再试'){
    throw new HttpException(msg, HttpStatus.FORBIDDEN)
  },

}
