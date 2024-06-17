import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Delete, Get, Post, Put } from "@/decorators/api-decorators/http-methods.decorator";
import { Request, Response } from "express";

@controller('schedules')
class SchedulesController {

    @Post('/')
    public async createSchedule(req: Request, res: Response) {
        return res.status(201).json({message: 'Schedule has been created via user controller'});
    }

    @Get('/')
    public async querySchedules(req: Request, res: Response) {
        return res.status(200).json({message: 'Returning schedules result via user controller'});
    }

    @Get('/:id')
    public async findScheduleById(req: Request, res: Response) {
        return res.status(200).json({message: `Returning your requested schedule via user controller ${req.params.id}`});
    }

    @Put('/:id')
    public async updateSchedule(req: Request, res: Response) {
        return res.status(200).json({message: `Updated schedule successfully via user controller ${req.params.id}`});
    }

    @Delete('/:id')
    public async deleteSchedule(req: Request, res: Response) {
        return res.status(200).json({message: `Deleted schedule successfully via user controller ${req.params.id}`});
    }
}

export default SchedulesController;