const axios = require('axios');
const {config} = require('dotenv');
const {logger} = require('../utils/loggerMS');

config();

module.exports = {
    getPErsonaId: async(req, res, next) => {
        try {
            console.log(req);
            const resp = await axios.get(process.env.URL_API);
            logger.info(JSON.stringify(req.params));
            logger.info(JSON.stringify(req.headers));
            console.log(req.headers);
            //console.log(resp.data);
            return res.status(200).json(resp.data);   
        } catch (error) {
            logger.error(JSON.stringify(error));
            return res.status(400).json({error: error, tip: "Error al obtener datos del facade"});
        }
    },

    sendNroPersona: (req, res) => {
        const nroPersona = {
            NUMEROPERSONA: 539
        }

        return res.status(200).json(nroPersona);
    },

    sendPersonasFisicas: (req, res) => {
        const data = [
            {
                DIRECCION: " ",
                TELEFONOS: "3369936",
                PLAZA_GIROACTIVIDAD: " ",
                COD_PROFESION: "0",
                ORDINAL: 0,
                RESULTADO: "V",
                TIPOREFERENCIA: "P",
                COD_PERSONA: 539,
                TZ_LOCK: 0,
                OBSERVACIONES: " ",
                TIPO_PERSONA: "F",
                NOMBRE: "ALEJANDRO JUSTINIANO",
                RELACION: 1
            }
        ];

        return res.status(200).json(data);
    },

    sendActEconomica: (req, res) => {
        const data = [
            {
                UBICACION_DEL_BIEN: " ",
                INICIO_ACTIVIDAD: null,
                ADELANTO_SUELDOS: 0,
                ZONA: null,
                REFERENCIA: null,
                VENTA_ANUAL: 0,
                COD_PAIS: 0,
                TIPO_DE_PERSONA: " ",
                SALARIO: 0,
                COD_POSTAL: " ",
                COD_CIUDAD: null,
                NRO_BPS: "0",
                PAGINAWEB: " ",
                ORDINAL_ACTIVIDAD: 1,
                DEPARTAMENTO: " ",
                APARTAMENTO: " ",
                NRO_CAJA_PROFESIONAL: 0,
                OTRA_VIVIENDA: null,
                UV: null,
                PERSONAS_A_CARGO: 0,
                DETALLE_ACTIVIDAD: "JUBILADO",
                F_GRUPO_ACT_EC: "2019-12-11T00:00:00-04:00",
                FECHAACTUALIZACIONINGRESOS: null,
                REQUIERE_CODEUDOR: " ",
                INFOCENTER: null,
                P_ESTADO_PATR_CERT: " ",
                PISO: 0,
                COMISIONES_COBRADAS: 0,
                GIRO: " ",
                FECHAINGRESO: null,
                CERTIFICADO_DGI: " ",
                COORDENADAS: null,
                VTO_CERT_DGI: null,
                EMAIL_TRAB: null,
                TIPO_DE_VIVIENDA: " ",
                NUMERO_PUERTA: " ",
                NUMEROPERSONAFISICA: 539,
                PARTIDAS_EXTRAORDINARIAS: 0,
                RUC_INDEPENDIENTE: 0,
                CUOTA_HIPOTECA: 0,
                REDES_SOCIALES: null,
                CARGO: " ",
                PRESENTA_BAL_DECL_JURADA: " ",
                INGRESO_NOMINAL: 0,
                IMPORTE: 0,
                CIUDAD: " ",
                INGRESO_LIQUIDO_PESOS: 0,
                FECHAEGRESO: null,
                HORAS_EXTRAS: 0,
                FUENTE_INGRESO: "R",
                VIATICOS: 0,
                TIPO_DE_RENTA: " ",
                COSTO_VENTA_ANUAL: 0,
                NRO_HIJOS: 0,
                CELULAR: " ",
                VTO_CONTRATO: null,
                EMPRESA: " ",
                DIRECCIONEMPRESA: " ",
                PADRON: " ",
                CALLE: " ",
                PARTIDAS_VARIABLES: 0,
                VIATICOS_SIN_RENDICION: 0,
                MONEDA: 0,
                CUOTA_ALQUILER: 0,
                TELEFONO: " ",
                CONSTANCIA_INGRESOS: " ",
                INGRESO_PROM_PESOS: 0,
                MANZANO: null,
                PEQUEÑA_EMPRESA_DGI: " ",
                INGRESOS_CERTIFICADOS: " ",
                BARRIO: " "
            }
        ];

        return res.status(200).json(data);
    },

    sendReferencias: (req, res) => {
        console.log(req);
        const data = [
            {
                DIRECCION: " ",
                TELEFONOS: "3369936",
                PLAZA_GIROACTIVIDAD: " ",
                COD_PROFESION: "0",
                ORDINAL: 0,
                RESULTADO: "V",
                TIPOREFERENCIA: "P",
                COD_PERSONA: 539,
                TZ_LOCK: 0,
                OBSERVACIONES: " ",
                TIPO_PERSONA: "F",
                NOMBRE: "ALEJANDRO JUSTINIANO",
                RELACION: 1
            },
            {
                DIRECCION: " ",
                TELEFONOS: "3369936",
                PLAZA_GIROACTIVIDAD: " ",
                COD_PROFESION: "0",
                ORDINAL: 0,
                RESULTADO: "V",
                TIPOREFERENCIA: "P",
                COD_PERSONA: 539,
                TZ_LOCK: 0,
                OBSERVACIONES: " ",
                TIPO_PERSONA: "F",
                NOMBRE: "ALEJANDRO JUSTINIANO",
                RELACION: 1
            }
        ];

        return res.status(200).json(data);
    },

    pruebaPost: (request, response) => {
        console.log(request);
    }
}