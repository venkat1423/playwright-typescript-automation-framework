import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
    BASE_URL : process.env.BASE_URL!,
    USERNAME : process.env.SAUCE_USERNAME!,
    PASSWORD : process.env.SAUCE_PASSWORD!
};