import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { NewObjectService } from './new-object.service';
import { CreateNewObjectDto } from './dto/create-new-object.dto';
import { UpdateNewObjectDto } from './dto/update-new-object.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NewObject } from './entities/new-object.entity';
import { AdminGuard } from 'src/common/guards/admin.guard';

@ApiTags('new-object')
@Controller('new-object')
export class NewObjectController {
  constructor(private readonly newObjectService: NewObjectService) {}


  @UseGuards(AdminGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'create NewObject'})
  @ApiResponse({ status: 201, type: NewObject })
  @Post()
  create(@Body() createNewObjectDto: CreateNewObjectDto) {
    return this.newObjectService.create(createNewObjectDto);
  }


  @HttpCode(200)
  @ApiOperation({ summary: 'Find All NewObject'})
  @ApiResponse({ status: 200, type: NewObject })
  @Get()
  findAll() {
    return this.newObjectService.findAll();
  }

  @HttpCode(200)
  @ApiOperation({ summary: 'Find By ID NewObject'})
  @ApiResponse({ status: 200, type: NewObject })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newObjectService.findOne(+id);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update By ID NewObject'})
  @ApiResponse({ status: 200, type: NewObject })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewObjectDto: UpdateNewObjectDto) {
    return this.newObjectService.update(+id, updateNewObjectDto);
  }


  @UseGuards(AdminGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete By ID NewObject'})
  @ApiResponse({ status: 200, type: NewObject })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newObjectService.remove(+id);
  }
}
