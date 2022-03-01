export interface Equipos {
    ok:   boolean;
    data: Equipo[];
}

export interface Equipo {
    _id:        string;
    name:       string;
    torneo?:     string;
    gcontra?:    number;
    gfavor?:     number;
    jempates?:   number;
    jganados?:   number;
    jjugados?:   number;
    jperdidos?:  number;
    diferencia?: number;
    puntos?:     number;
}
