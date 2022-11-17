import { Injectable } from '@nestjs/common';
import { Image, Tag } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { CreateTweetInput } from './dto/create-tweet.input';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetService {
  constructor(
    private readonly prisma: PrismaService,
  ){}


  async create(createTweetInput: CreateTweetInput) {
      
    const images = createTweetInput.images.map((src)=>{return {src}})
    const tweet = await this.prisma.tweet.create({
      include:{
        images:true,
        tags:true
      },
      data:{
        userId:createTweetInput.userId,
        content:createTweetInput.content,
        images:{
          create:images
        },
        tags:{
          
        }
      }
    })

createTweetInput.tags.map(async(id)=>{
  const tagTemp = await this.prisma.tag.findUnique({where:{id},include:{tweets:true}})
  console.log(tagTemp.tweets)
  tagTemp.tweets.push(tweet)
  console.log(tagTemp.tweets)
  // await this.prisma.tag.update({
  //   where:{id},
  //   data:{
  //     tweets:{
        
  //     }
  //   },
  //   include:{
  //     tweets:true
  //   }
  // })
  // const tag =await this.prisma.tag.findUnique({where: {id}})
})
    
  
    return 'tweet'
  }

  async findAll() {
    return await this.prisma.tweet.findMany() 
  }

  async findOne(id: number) {
    return await this.prisma.tweet.findUnique({where:{id}}) 
  }
  
  async remove(id: number) {
    return await this.prisma.tweet.delete({where:{id}})
  }
}
