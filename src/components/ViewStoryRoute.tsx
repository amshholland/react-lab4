import { Link, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { StoryContext, StoryContextProvider } from "../context/storyContext";

interface RouteParams {
    index: number;
}

export function ViewStoryRoute() {
    const { stories, setStorybyIndex } = useContext( StoryContext );
    let index = stories.indexOf( stories );
    index = useParams<RouteParams>();
    return (
        <div className="ViewStoryRoute">
            <Link to='/{index}'></Link>
        </div>
    );
}