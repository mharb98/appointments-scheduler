import { controller } from "@/decorators/api-decorators/controller.decorator";
import { Delete, Get, Patch, Post, Put } from "@/decorators/api-decorators/http-methods.decorator";
import { Inject } from "@/decorators/dependency-injection-decorators/inject.decorator";
import { NextFunction, Request, Response } from "express";
import { AdminSchedulesService } from "./admin.schedules.service";
import { Autowired } from "@/decorators/dependency-injection-decorators/auto-wired.decorator";
import { AppointmentsRepository } from "@/database/repositories/appointments.repository";

@Autowired
@controller('appointments')
class AdminAppointmentsController {
    @Inject("AppointmentsRepository")
    private appointmentsRepository: AppointmentsRepository;

    @Post('/')
    public async createSchedule(req: Request, res: Response, next: NextFunction) {
        try {
            const appointment = await this.appointmentsRepository.createAppointment(req.body);

            return res.status(201).json({message: appointment});
        } catch(error: any) {
            next(error);
        }
    }

    @Get('/:id')
    public async findScheduleById(req: Request, res: Response) {
        const appointmenId = req.params.id;
        const appointment = await this.appointmentsRepository.findOne(appointmenId);

        if(appointment){
            return res.status(200).json({appointment});
        } else {
            return res.status(404).json({message: `Appointment ${appointmenId} does not exist`});
        }
    }

    @Put('/:id')
    public async updateSchedule(req: Request, res: Response) {
        const id = req.params.id
        await this.appointmentsRepository.updateAppointment(id, req.body);

        const appointment = await this.appointmentsRepository.findOne(id);

        return res.status(200).json({appointment});
    }

    @Get('/')
    public async querySchedules(req: Request, res: Response) {
        console.log(req.query);

        return res.status(200).json({message: 'Here are your schedules'});
    }

    @Delete('/:id')
    public async deleteSchedules(req: Request, res: Response) {
        const id = req.params.id;
        
        await this.appointmentsRepository.deleteOne(id);

        return res.status(204).json({id});
    }

    @Patch('/:id/reschedule')
    public async rescheduleAppointment(req: Request, res: Response) {
        const id = req.params.id;

        await this.appointmentsRepository.updateAppointment(id, {date: req.body.date});

        const appointment = await this.appointmentsRepository.findOne(id);

        return res.status(200).json({ appointment });
    }

}

export default AdminAppointmentsController;