import axios from 'axios';

async function getData(userId) {
    try {
        const { data: userData } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const { data: userPosts } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        const combinedData = {
            ...userData,
            posts: userPosts,
        };

        return combinedData;
    } catch (error) {
        throw new Error("An error occurred while fetching data.");
    }
}

export default getData;
