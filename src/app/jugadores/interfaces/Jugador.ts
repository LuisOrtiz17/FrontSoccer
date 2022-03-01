import { Equipo } from '../../equipos/interfaces/Equipos';
export interface Players{
    ok: boolean,
    data: Jugador[];
    msg?: string;
}

export interface Jugador {
    golesmarcados: number;
    _id:           string;
    nombre:        string;
    dorsal:        number;
    equipo:        Equipo;
}
/*
export interface Equipo {
    _id:  string;
    name: string;
}*/
