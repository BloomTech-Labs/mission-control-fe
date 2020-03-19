import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Notes from './index';

//Does the note Display On project?
test('Does note diplay on project', () => {
    const { getByTestId } = render(<Notes/>);
    const note = getByTestId('note');
    expect(note).toBeInTheDocument();
    expect(note).toBeVisible();
})

//Does 'topic' display on notes?
test('topic displays on note', () => {
    const { getByTestId } = render(<Notes />);
    const topic = getByTestId('topic');
    expect(topic).toBeInTheDocument();
    expect(topic).toBeVisible();
})

//Does 'content' display on notes?
test('content displays on note', () => {
    const { getByTestId } = render(<Notes />);
    const content = getByTestId(<Notes />)
    expect(content).toBeInTheDocument();
    expect(content).toBeVisible();
})

// //Does 'Private' display on notes?
// test('Private displays on notes', () => {
//     expect(true).toBe(true)
// })

// //Do the 'ratings' display on notes?
// test('Ratings display on notes', () => {
//     expect(true).toBe(true)
// })

// //Do the attendees appear on the notes
// test('Attendees displays on notes', () => {
//     expect(true).toBe(true)
// })

// //At student login does 'Public' display


//At student login does 'Private' display

//At manager login does 'Public' display

//At manager login does 'Private' display



