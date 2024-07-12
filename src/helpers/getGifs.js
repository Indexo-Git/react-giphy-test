export const getGifs = async(category) => {

    if(!category) return;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=D42VPuSmGX1785VNv9TwHlkr6VbLIHWj&q=${ category }&limit=6`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map( img => ({
        id : img.id,
        title : img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}