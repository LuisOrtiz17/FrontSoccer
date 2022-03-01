export interface Torneos {
    ok:   boolean;
    data: Torneo[];
}

export interface Torneo {
    _id:         string;
    name?:       string;
    diasPartido: string[];
    categoria:   Categoria;
    disciplina:  Disciplina;
    nombre?:     string;
    __v?:        number;
}

export interface Categoria {
    _id:    string;
    nombre: string;
    desc:   string;
    __v:    number;
}

export interface Disciplina {
    _id:    string;
    nombre: string;
    codigo: string;
}
