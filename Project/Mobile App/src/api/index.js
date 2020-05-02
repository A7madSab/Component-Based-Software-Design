export const getRes = async (image) => {
    try {
        const myHeaders = {
            "Content-Type": "application/json"
        }
        const splitImage = image.base64
        const raw = JSON.stringify({ Base64Image: splitImage })
        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: myHeaders,
            body: raw
        }
        const response = await fetch("http://192.168.1.2:5201/test", requestOptions)
        const data = await response.json()
        return data.text
    } catch (err) {
        console.log("err", err)
    }
}