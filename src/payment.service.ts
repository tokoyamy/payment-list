import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './payment.model';

@Injectable()
export class PaymentService {
  constructor(
      @InjectModel(Payment)
      private paymentModel: typeof Payment
  ) {}

  async getAll(): Promise<Payment[]>{
    return this.paymentModel.findAll();
  }

  async get(id: number): Promise<Payment>{
    return this.paymentModel.findByPk(id);
  }

  async create(payment: Payment){
    return this.paymentModel.create(payment);
  }

  async change(payment: Payment): Promise<[number, Payment[]]>{
    return this.paymentModel.update(payment, {
      where: {
          id: payment.id
      }
  });
}

  async remove(id: number){
    const payment: Payment = await this.get(id);
    payment.destroy();
  }
}
