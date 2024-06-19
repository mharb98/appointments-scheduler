import { AppointmentsRepository } from "@/database/repositories/appointments.repository";
import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Delete, Get, Post, Put } from "@/decorators/api-decorators/http-methods.decorator";
import { Autowired } from "@/decorators/dependency-injection-decorators/auto-wired.decorator";
import { Inject } from "@/decorators/dependency-injection-decorators/inject.decorator";
import { Request, Response } from "express";

@Autowired
@controller('appointments')
class AppointmentsController {
    @Inject("AppointmentsRepository") 
    private appointmentsRepository: AppointmentsRepository;
    
    @Post('/')
    public async createSchedule(req: Request, res: Response) {
        const user: any = req.user;

        const appointment = await this.appointmentsRepository.createAppointment({
            ...req.body,
            userId: user.id,
        });

        return res.status(201).json({ appointment });
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

export default AppointmentsController;