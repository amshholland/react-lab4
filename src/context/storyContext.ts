import { ReactNode, createContext, useState } from "react";

import { Story } from "../model/Story";

interface StoryContextValue {
    stories: Story[];
    addStory: ( story: Story ) => void;
    storyIndex: ( stories: Story[] ) => void;
}

const initialValue: StoryContextValue = {
    stories: [],
    addStory: () => { },
    storyIndex: () => { }
};

const StoryContext = createContext( initialValue );

export function StoryContextProvider( { children }: { children: ReactNode; } ) {
    const [ stories, setStories ] = useState<Story[]>( [
        { name: "", words: [ "", "", "", "", "", "" ] },
        { name: "", words: [ "", "", "", "", "", "" ] },
        { name: "", words: [ "", "", "", "", "", "" ] },
        { name: "", words: [ "", "", "", "", "", "" ] },
    ] );

    function addStory( story: Story ): void {
        setStories( prev => [ ...prev, { ...story } ] );
    }

    function storyIndex( story: Story ): number {
        return stories.indexOf( story );
    }

    return (
        <StoryContext.Provider value = {{ stories, addStory, storyIndex; }
} >
    { children }
    < /StoryContext.Provider>
  );
