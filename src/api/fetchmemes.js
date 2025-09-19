function memefetch(){
    return (fetch("https://api.imgflip.com/get_memes").
    then((data)=>data.json()));
}
export default memefetch;