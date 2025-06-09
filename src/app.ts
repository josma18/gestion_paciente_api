import express, {Application} from 'express';
import pacienteRouter from './routes/paciente.route';
import AppDataSource from './config/appdatasource';

const app: Application = express ();

app.use(express.json());
app.use('/api/v1/pacientes', pacienteRouter); 

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('La base de datos se ha conectado correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos',error);
    }
}
export default app;

