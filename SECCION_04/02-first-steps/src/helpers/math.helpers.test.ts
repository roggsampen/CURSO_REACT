import { test } from "vitest";
import { suma } from "./math.helpers";

test('aggredar dos numeros positivos', () => {
    
    const resultado = suma(1, 3);
    console.log({resultado});
    
    if (resultado !== 2) {
        throw new Error("El resultado no es 2");
    }
    
});




