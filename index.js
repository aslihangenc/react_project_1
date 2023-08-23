import getData from './app.js';

async function main() {
    try {
        const userId = 1;
        const userData = await getData(userId);

        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}

main();
