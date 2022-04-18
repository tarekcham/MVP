const BASIC_URL = 'http://178.63.13.157:8090/mock-api/api/'

export const getUsers = async () => {
    return await fetch(`${BASIC_URL}users`);

};

export const getProjects = async () => {
    return await fetch(`${BASIC_URL}projects`);

};

export const getGateways = async () => {
    return await fetch(`${BASIC_URL}gateways`);

};

export const getReport = async ({from = '2021-01-01', to = '2021-02-28'}) => {
    const options = {
        from: from,
        to: to
    }

    return fetch(`${BASIC_URL}report`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(options)
    });

};
