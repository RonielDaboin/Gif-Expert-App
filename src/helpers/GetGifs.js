export const getGifs = async ( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=E9laAFPLH1AvzyUsgLFtawxyUty1Hux6&q=${category}&limit=10`
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
    
    const gifts = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
   console.log(gifts)
    return gifts;
  
  }