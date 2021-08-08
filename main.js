async function FetchImages(SerializedArray) {
    var ImageLinkArray = JSON.parse(SerializedArray);
    var blobArray = new Array();
    if (Array.isArray(ImageLinkArray)) {
        ImageLinkArray.forEach(async function(item){
            if (typeof(item) == "string") {
                console.log("Downloading " + item + "...")
                let request = await fetch(item)
                let temp = await request.blob()
                blobArray.push(temp);
            }
        })
        return blobArray;
    }
    return null;
}