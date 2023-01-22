
export const Ajax = async (url = "", method, formData) => {

    let loading = true;

    let options = { method: 'GET' };

    if (method === "GET" || method === "DELETE") {
        options = {
            method: method
        };
    }

    if (method === 'POST' || method === 'PUT') {
        options = {
            method: method,
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        };
    }
    const request = await fetch(url, options);
    const data = await request.json();
    loading = false;

    return {
        data,
        loading
    }
}