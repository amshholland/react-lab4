import { title } from "process";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StoryContext } from "../context/storyContext";

interface RouteParams {
    index: string;
}

export function ViewStoryRoute() {
    const { index } = useParams<RouteParams>();
    const { story, getStoryByIndex } = useContext( StoryContext );

    const story = getStory( parseInt( index ) );

    return (
        <div className="ViewStoryRoute">
            <h2>{ title }</h2>
            <p>“You know,” said Ron, whose hair was on end because of all the times he had run his
            fingers through it in { word[ 0 ] }, “I think it's back to the old Divination standby.”
            “What—make it up?”
            “Yeah,” said Ron, sweeping the jumble of scrawled notes off the table, dipping his pen
            into some { word[ 1 ] }, and starting to write.
            “Next Monday,” he said as he scribbled, “I am likely to develop a { word[ 2 ] }, owing to
            the unlucky conjunction of Mars and Jupiter.” He looked up at Harry. “You know
            her—just put in loads of { word[ 3 ] }, she'll lap it up.”
            “Right,” said Harry, crumpling up his first attempt and lobbing it over the heads of a
            group of chattering first years into the fire. “Okay... on Monday, I will be in danger
            of—er—burns.”
            “Yeah, you will be,” said Ron darkly, “we're seeing the { word[ 4 ] } again on Monday. Okay,
            Tuesday, I'll...erm..
            “Lose a { word[ 5 ] } possession,” said Harry, who was flicking through Unfogging the Future
             for ideas.
            “Good one,” said Ron, copying it down. “Because of... erm... Mercury. Why don't you get
            { word[ 6 ] } in the { word[ 7 ] } by someone you thought was a friend?”
            “Yeah... cool...” said Harry, scribbling it down, “because... Venus is in the twelfth house.”
            “And on Wednesday, I think I'll come off worst in a { word[ 8 ] }.”
            “Aaah, I was going to have a { word[ 8 ] }. Okay, I'll { word[ 9 ] } a { word[ 10 ] }.”
            “Yeah, you'll be { word[ 10 ] }ing I'll win my { word[ 8 ] }...
            They continued to make up predictions (which grew steadily more { word[ 11 ] }) for another hour,
            while the common room around them slowly emptied as people went up to bed. Crookshanks wandered
            over to them, leapt lightly into an empty chair, and stared { word[ 12 ] } at Harry, rather as
            Hermione might look if she knew they weren't doing their homework properly.</p>
            <Link to='/{index}'></Link>
        </div>
    );
}