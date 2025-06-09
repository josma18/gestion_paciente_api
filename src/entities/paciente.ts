import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('pacientes')
export class Paciente {
    @PrimaryGeneratedColumn({ name: 'id_paciente' })
    idPaciente: number;

    @Column({ name: 'dni', length: 8 })
    dni: string;

    @Column({ name: 'nombres', length: 100 })
    nombres: string;

    @Column({ name: 'apellido_paterno', length: 100 })
    apellidoPaterno: string;

    @Column({ name: 'apellido_materno', length: 100 })
    apellidoMaterno: string;

    @Column({ name: 'sexo', length: 10 })
    sexo: string;

    @Column({ name: 'fecha_nacimiento', type: 'date' })
    fechaNacimiento: Date;

    @Column({ name: 'telefono', length: 9 })
    telefono: string;

    @Column({ name: 'correo', length: 100 })
    correo: string;

    @Column({ name: 'direccion', length: 100 })
    direccion: string;

    @Column({ name: 'estado_auditoria', length: 1, default: '1' })
    estadoAuditoria: string;

    @Column({ name: 'fecha_registro', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fechaRegistro: Date;
}
