import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Delete, Get, Post, Put } from "@/decorators/api-decorators/http-methods.decorator";
import { Inject } from "@/decorators/dependency-injection-decorators/inject.decorator";
import { Request, Response } from "express";
import { AdminSchedulesService } from "./admin.schedules.service";
import { Autowired } from "@/decorators/dependency-injection-decorators/auto-wired.decorator";

@Autowired
@controller('schedules')
class AdminAppointmentsController {
    @Inject("AdminSchedulesService")
    private schedulesService!: AdminSchedulesService;

    @Post('/')
    public async createSchedule(req: Request, res: Response): Promise<any> {
        const result = this.schedulesService.createSchedule();

        return res.status(201).json({message: result});
    }

    @Get('/:id')
    public async findScheduleById(req: Request, res: Response): Promise<any> {
        console.log(req.params.id);
        console.log(req.user);

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

export default AdminAppointmentsController;