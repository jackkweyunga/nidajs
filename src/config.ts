
export const api: string = "https://lazy-proxy.herokuapp.com/nin/";

export const config = {
    url:(id: any, proxy: string) => `${proxy}${id}`
}


