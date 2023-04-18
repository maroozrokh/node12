/* eslint-disable prettier/prettier */
import { PostClientProxy } from '@libs/common/client-proxy/post';
import { CreatePostDto } from './../../../post-micro/src/post/dto/create-post.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

  constructor(private readonly post: PostClientProxy) {}

  CreatePosts(data: any) {
    return this.post.create(data);
  }
}
