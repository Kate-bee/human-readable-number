module.exports = function toReadable(number) {
    const units = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine'];
    const dozens = ['', ' ten', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    const exceptions = ['', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let result = '';
    let un, doz, hundr;
    if (number === 0) {
        return 'zero';
    }
    hundr = Math.trunc(number / 100);
    if (hundr === 0) result = '';
    if (hundr > 0) {
        result = result + (units[hundr] + ' hundred');
    }
    un = number % 10;
    doz = ((number % 100) - un) / 10;
    if (doz === 1 && (un > 0 && un <= 9)) {
        result = result + exceptions[un];
    } else {
        result = result + dozens[doz] + units[un];
    }
    return result.trim();

}
