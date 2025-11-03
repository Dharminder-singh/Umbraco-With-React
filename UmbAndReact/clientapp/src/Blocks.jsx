import CtaContentBlock from "./Blocks/ctaContentBlock";
import ImageContentBlock from "./Blocks/imageContentBlock";
import Split from "./Blocks/split";
import TextContentBlock from "./Blocks/textContentBlock";

const Blocks = ({ blocks }) => {
    if (!blocks) return <div> page Content is missing</div>
    return blocks.map((block) => {
        const key = block.content.id;
        switch (block.content.contentType) {
            case "imageContentBlock":
                return <ImageContentBlock key={key} content={block.content.properties} />
            case "textContentBlock":
                return <TextContentBlock key={key} content={block.content.properties} />
            case "ctaContentBlock": 
                return <CtaContentBlock key={key} content={block.content.properties} />
            case "split": 
                return <Split key={key} content={block.content.properties} />

        }

    })

}

export default Blocks;