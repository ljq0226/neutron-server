import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateTagInput } from './dto/create-tag.input';

@Injectable()
export class TagService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async create(createTagInput: CreateTagInput) {
    return await this.prisma.tag.create({
      data: {
        tagName: createTagInput.tagName
      }
    })
  }

  async findAll() {
    return await this.prisma.tag.findMany({
      include: {
        tweets: {
          include: {
            images: true,
            tags: true
          }
        }
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.tag.findUnique({ where: { id } })
  }

  async remove(id: number) {
    return await this.prisma.tag.delete({ where: { id } })
  }
}
