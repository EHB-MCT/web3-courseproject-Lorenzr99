import ky from 'ky';

class MotionCardService {
    baseUrl = 'https://api.thedogapi.com/v1';
    key = 'b22ffd22-601d-4bef-9bac-541fde0c947c';

    constructor() {
		this.httpClient = ky.create({ prefixUrl: this.baseUrl });
	}

    async getAllDogBreeds() {
        return this.httpClient.get(`breeds?api_key=${this.key}`).json();
    }
}

export const motionCardService = new MotionCardService();