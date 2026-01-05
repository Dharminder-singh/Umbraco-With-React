import React from 'react'
import ImageCard from './imageCard';

export default function Pods({ content, setting }) {
    if (setting?.hideFromWebsite == true) return null;
    if (!content) return null;
    const containerClass = setting?.componentsLayout;
    const podcontent = content.pods.items
    const numberOfPods = setting?.numberOfItems;
    return (
        <>
            <section id="pods-block" className={containerClass}>
                <div className='podintro'>
                    {content?.heading && (
                        <h2>{content.heading}</h2>
                    )}
                    {content?.subHeading && (
                        <p className="subHeading">{content.subHeading}</p>
                    )}
                </div>
                <div className={`grid grid-cols-4 gap-4`}>
                   {
                    podcontent.map((block) => {
                        const key = block.content.id;
                        switch (block.content.contentType) {
                            case "textContentBlock":
                                return <TextContentBlock key={key} content={block.content.properties} />
                            case "imageCard":
                                return <ImageCard key={key} content={block.content.properties} />

                        }
                        return null;
                    })} 
                </div>
            </section>
        </>
    )
}
