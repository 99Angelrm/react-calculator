export const doOperation = (op1, op2, op) => {
    console.log(op1, op2, op);
    switch (op) {
        case "+":
            return op1 + op2;
        case "-":
            return op1 - op2;
        case "*":
            return op1 * op2;
        case "÷":
            return (op1 / op2).toFixed(5);
        default:
            return "error";
    }
};
