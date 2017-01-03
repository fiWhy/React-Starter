import cards from '../mocks/cards';

export interface IAppService {
    cards: any[];
}

class AppServiceImplementation implements IAppService {
    get cards(): any[] {
        return cards;
    }
}

export const AppService = new AppServiceImplementation;