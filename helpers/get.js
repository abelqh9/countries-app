export function get(url) {
    return fetch(url).then(res => {
            return res.ok
                ? res.json()
                : Promise.reject(res)
        });
}