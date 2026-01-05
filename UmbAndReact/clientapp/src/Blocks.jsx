import CtaContentBlock from "./Blocks/ctaContentBlock";
import ImageContentBlock from "./Blocks/imageContentBlock";
import Split from "./Blocks/split";
import TextContentBlock from "./Blocks/textContentBlock";
import Pods from "./Blocks/pod";

const Blocks = ({ blocks }) => {
    if (!blocks) return <div> page Content is missing</div>
    return blocks.map((block) => {
        const key = block.content.id;
        switch (block.content.contentType) {
            case "imageContentBlock":
                return <ImageContentBlock key={key} content={block.content.properties} setting={block.settings.properties} />
            case "textContentBlock":
                return <TextContentBlock key={key} content={block.content.properties} setting={block.settings.properties}/>
            case "ctaContentBlock": 
                return <CtaContentBlock key={key} content={block.content.properties} setting={block.settings.properties} />
            case "split": 
                return <Split key={key} content={block.content.properties} setting={block.settings.properties} />
            case "pod": 
                return <Pods key={key} content={block.content.properties} setting={block.settings.properties} />

        }

    })

}

export default Blocks;