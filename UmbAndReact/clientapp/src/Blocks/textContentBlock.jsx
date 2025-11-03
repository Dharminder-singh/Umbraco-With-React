function TextContentBlock({ content }) {
    if (!content.textContent?.markup) {
        return;
    }
    return <div dangerouslySetInnerHTML={{ __html: content.textContent.markup }} />;
}
export default TextContentBlock;