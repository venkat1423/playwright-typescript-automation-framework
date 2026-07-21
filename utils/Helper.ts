export class Helper {

    // Generate random number of specified length
    static generateRandomNumber(max:number = 100000): number {
        return Math.floor(Math.random() * max);
    }

    // Generate random email address
    static generateRandomEmail(): string {
        const randomNumber = this.generateRandomNumber();
        return `test${randomNumber}@gmail.com`;
    }

    // Generate random username
    static generateRandomUsername(): string {
        const randomNumber = this.generateRandomNumber();
        return `user${randomNumber}`;
    }

    // Generate random phone number
    static generateRandomPhoneNumber(): string {
        return `98${Math.floor(Math.random() * 90000000)}`;
    }

    //Current date
    static getCurrentDate(): string {
        return new Date().toLocaleDateString();
    }

    // Convert Prices to Numbers
    static convertPriceToNumbers(prices: string[]): number[] {
        return prices.map(price => Number(price.replace('$','')));
    }

    // Sort Numbers in ascending order
    static sortAscending(numbers: number[]): number[]{
        return [...numbers].sort((a,b)=> a-b);
    }

    // Sort Numbers in descending order
    static sortDescending(numbers: number[]): number[]{
        return [...numbers].sort((a,b)=> b-a);
    }
}