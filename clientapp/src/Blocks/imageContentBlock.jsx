function ImageContentBlock({ content , setting}) {
    if(setting?.hideFromWebsite == true) return null;
    const media = content.image[0];
    const containerClass = setting?.componentsLayout;

    return <section id="image-content-block" className={containerClass}>

        <img src={`${media.url}`} width="100%" />

    </section>

}
export default ImageContentBlock;