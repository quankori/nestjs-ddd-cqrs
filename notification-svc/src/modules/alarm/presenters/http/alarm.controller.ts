import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { AlarmService } from '../../application/alarm.service';
import { CreateAlarmCommand } from '../../application/commands/create-alarm.command';

@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity)
    );
  }

  @Get()
  findAll() {
    return this.alarmService.findAll();
  }
}