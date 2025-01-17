import React, { useState } from "react";
import './NewBoardForm.css';
import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");
    const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

    const handleSubmitBoard = (event) => {
        event.preventDefault();
        props.submitForm({
            title: title,
            owner: owner,
        });
        setTitle("");
        setOwner("");
    };

    const hideForm = () => {
        setIsBoardFormVisible(false);
    };

    const showForm = () => {
        setIsBoardFormVisible(true);
    };

    return (
        <div className='newboard_container'>
            <h2 className='newboard_title'>Create a New Board</h2>
            {isBoardFormVisible && (
                <form onSubmit={handleSubmitBoard}>
                    <label>
                    ✨Title✨
                        <input className='title-input-box'
                        type="text"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        />
                    </label>
                    <p></p>
                    <label>
                    ✨Owner✨
                        <input className='owner-input-box'
                        type="text"
                        name="owner"
                        value={owner}
                        onChange={(event) => setOwner(event.target.value)}
                        />
                    </label>
                    <p></p>
                    <p>Preview</p>
                    <p>Title: {title}</p>
                    <p>Owner: {owner}</p>
                    <button className='submit-button' onClick={handleSubmitBoard}>Submit</button>
                </form>
            )}
            <p></p>
            <button className='hide-button' onClick={isBoardFormVisible ? hideForm : showForm}>
                {isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}
            </button>

        </div>
    );
};

NewBoardForm.propTypes = {
  submitForm: PropTypes.func.isRequired
};

export default NewBoardForm;