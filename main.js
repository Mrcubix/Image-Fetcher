async function FetchImages(SerializedArray) {
    var ImageLinkArray = JSON.parse(SerializedArray);
    var blobArray = new Array();
    if (Array.isArray(ImageLinkArray)) {
        ImageLinkArray.forEach(item => {
            if (typeof(item) == "string") {
                console.log("Downloading " + item + "...")
                await fetch(item).then(response => {
                    blobArray.push(response.blob());
                })
            }
        })
        return blobArray;
    }
    return null;
}