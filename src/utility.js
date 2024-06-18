export function format3Digits(number) {
    const len = String(number).length;
    
    if (len > 3) {
        throw new Error(`input ${number} longer than 3 digits!`);
    }

    return " ".repeat(3 - len) + String(number);
}