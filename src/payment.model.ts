import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Payment extends Model<Payment> {
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    valor: number;
}