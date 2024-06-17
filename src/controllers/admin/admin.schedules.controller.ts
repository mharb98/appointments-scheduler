import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Delete, Get, Post, Put } from "@/decorators/api-decorators/http-methods.decorator";
import { Request, Response } from "express";

@controller('schedules')
class AdminSchedulesController {
    
    @Post('/')
    public async createSchedule(req: Request, res: Response): Promise<any> {
        console.log(req.body);

        return res.status(201).json({message: 'Schedule has been created successfully'});
    }

    @Get('/:id')
    public async findScheduleById(req: Request, res: Response): Promise<any> {
        console.log(req.params.id);

        return res.status(200).json({message: 'Here is your schedule'});
    }

    @Put('/:id')
    public async updateSchedule(req: Request, res: Response): Promise<any> {
        console.log(req.params.id);

        return res.status(200).json({message: 'Updated your schedule successfully'});
    }

    @Get('/')
    public async querySchedules(req: Request, res: Response): Promise<any> {
        console.log(req.query);

        return res.status(200).json({message: 'Here are your schedules'});
    }

    @Delete('/:id')
    public async deleteSchedules(req: Request, res: Response): Promise<any> {
        console.log(req.params.id);
        
        return res.status(204).json({message: 'Schedule has been deleted successfully'});
    }
}

export default AdminSchedulesController;