
export const Ajax = async (url = "", method, formData, files = false) => {

    let loading = true;

    let options = { method: 'GET' };

    if (method === "GET" || method === "DELETE") {
        options = {
            method: method
        };
    }

    if (method === "POST" || method === "PUT") {

        let body = "";
        if(files){
            options = {
                method: method,
                mode: 'cors',
                body: formData 
            };
        }else{
            options = {
                method: method,
                mode: 'cors',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
        }
    }
    const request = await fetch(url, options);
    const data = await request.json();
    loading = false;

    return {
        data,
        loading
    }
}