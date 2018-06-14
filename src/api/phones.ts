import { Phone } from '../model';

const GetAllPhones = (): Promise<Phone[]> => {

    let modeRequest: RequestMode;
    let baseUrl = `http://reacttajamar.azurewebsites.net/`;

    modeRequest = 'cors';
    let obj = {
        method: 'GET',
        mode: modeRequest
    };

    let url = `${baseUrl}api/phones`;


    return fetch(url, obj).then((response) => parseJSON(response)).then(mapToPhoneList);
};


const parseJSON = (response: Response): any => {
    return response.json();
}

const mapToPhoneList = (phoneItem): Phone[] => {
    let result: Phone[] = [];

    phoneItem.map((item) => {
        let phoneMap: Phone = {
            name: item.name,
            brand: item.brand,
            color: item.color,
            imageUrl: item.imageUrl,
            price: item.price,

        };
        result.push(phoneMap);
    });

    return result;
};

export const phonesApi = {
    GetAllPhones
  
};