function ImageContentBlock({ content }) {
    const media = content.image[0];

    return <div id="image-content-block">

        <img src={`${media.url}`} width="100%" />

    </div>

}
export default ImageContentBlock;