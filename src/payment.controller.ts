import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Payment } from './payment.model';
import { PaymentService } from "./payment.service";

@Controller('api/v1/payment-list')
export class PaymentController {
    constructor(private PaymentService: PaymentService) {

    }

    @Get()
    async getAll(): Promise<Payment[]> {
        return this.PaymentService.getAll();
    }

    @Get(':id')
    async get(@Param() params): Promise<Payment> {
        return this.PaymentService.get(params.id)
    }

    @Post()
    async create(@Body() payment: Payment) {
        this.PaymentService.create(payment);
    }

    @Put()
    async change(@Body() payment: Payment): Promise<[number, Payment[]]> {
        return this.PaymentService.change(payment);
    }

    @Delete(':id')
    async remove(@Param() params) {
        this.PaymentService.remove(params.id);
    }
}