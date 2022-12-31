import * as api from '../../api';
import { GET_RESULTS } from '../types';

export const getResults =(instructions)=>({
    type: GET_RESULTS,
    payload: api.get_results(instructions)
})