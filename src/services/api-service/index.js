export default class ApiService {
    _apiBase = 'https://localhost:5001/api';  

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    getAllDrones = async () => {
        const res = await this.getResource(`/drones/`);
        return res;
    };

    authenticate = async (user) => {
        console.log(JSON.stringify(user));
        return await fetch(`${this._apiBase}/users/`, {method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(user)});
    }; 

    register = async (user) => {
        return await fetch(`${this._apiBase}/users/registration`, {method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(user)});
    }
}