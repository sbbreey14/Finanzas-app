
interface StateProps {
    id: string;
    nombreServicio: string;
    monto: number;
    fecha: string;
    categoria: string;
}

type State = { finanzas: StateProps[] }

type ActionProps =
  | { type: "ADD_FINANZAS"; payload: StateProps }
  | { type: "DELETE_FINANZAS"; payload: string }
  | { type: "EDIT_FINANZAS"; payload: { id: string } & Partial<Omit<StateProps, 'id'>> }

export const initialState: State = {
    finanzas: []
} 


export const FinanzasReducer = ( state:State, action:ActionProps ):State => {
    switch ( action.type ) {
        case 'ADD_FINANZAS':
            return {
                ...state,
                finanzas: [ ...state.finanzas, action.payload ]
            }
        case 'DELETE_FINANZAS':
            return {
                ...state,
                finanzas: state.finanzas.filter( finanza => finanza.id != action.payload )
            }
        case 'EDIT_FINANZAS':
            return {
                ...state,
                finanzas: state.finanzas.map( finanza => finanza.id === action.payload.id ? 
                    { ...finanza, ...action.payload } 
                    : finanza 
                )
            }
        default:
            return state;
    }

    
}