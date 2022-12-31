import axios from 'axios';

export const get_results = async (instructions) => {
        try {
                const response=await axios({
                    method:'POST',
                    url:`http://localhost:3001/api/solution/insects`,
                    data:{ instructions: instructions }
                })
                console.log(response.data);
            return {
                results:response.data.result
            }
        } 

     catch (error) {
        return {
            results:"invalid instructions"
        }
    }
}