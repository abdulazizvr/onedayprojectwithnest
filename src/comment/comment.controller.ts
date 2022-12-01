import { Controller,Post,Body,Get,Param,Put, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.model';
import { UpdateCommentDto } from './dto/update-comment.dto';
@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) {}

    @ApiOperation({summary:"Foydalanuvchilarni olish"})
    @ApiResponse({status:200,type:[Comment]})
    @Get()
    getAll(){
        return this.commentService.getAll()
    }

    @ApiOperation({summary:"Foydalanuvchilarni olish"})
    @ApiResponse({status:201,type:Comment})
    @Post()
    create(@Body() createcommentDto:CreateCommentDto){
        return this.commentService.create(createcommentDto)
    }

    @ApiOperation({summary:"Foydalanuvchini olish"})
    @ApiResponse({status:200,type:[Comment]})
    @Get(':id')
    getOne(@Param('id') id:number){
        return this.commentService.getOne(id)
    }

    @ApiOperation({summary:"Foydalanuvchilarni o'chirish"})
    @ApiResponse({status:200,type:[Comment]})
    @Put(':id')
    update(@Param('id')id:number,@Body() updatecommentDto:UpdateCommentDto){
        return this.commentService.update(id,updatecommentDto)
    }

    @ApiOperation({summary:"Foydalanuvchilarni olish"})
    @ApiResponse({status:202,type:[Comment]})
    @Delete(':id')
    delete(@Param('id') id:number){
        return this.commentService.delete(id)
    }

}
