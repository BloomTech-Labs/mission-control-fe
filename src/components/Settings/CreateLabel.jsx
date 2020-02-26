import React, {useState, useContext, useCallback} from 'react';
import styled from 'styled-components';
import {Button, UncontrolledPopover, PopoverBody} from 'reactstrap';
import {useMutation} from 'urql';
import {CirclePicker} from 'react-color';
import {CREATE_LABEL as createLabel} from '../Project/Queries';


import {LabelContext} from '../../contexts/LabelContext';


const CreateLabelForm = (props) => {
    const {label, setLabel} = useContext(LabelContext);

    const [, executeCreate] = useMutation(createLabel)

    const handleSubmit = useCallback(
        e => {
            e.preventDefault()
            executeCreate(label)
            props.toggle()
            setLabel({id:'', name: '', color: ''})
        },
        [executeCreate, label]
    );

    const LabelPreviewColor = styled.div`
    color: white;
    text-align: center;
    padding-top: 2px;
    margin-bottom: 10px;
    width: 60px;
    height: 20px;
    border-radius: 25px;
    font-size: 0.8rem;
    background: ${label.color};
  `;

    const handleChanges = e => {
        e.preventDefault();
        setLabel({
            ...label,
            [e.target.name]: e.target.value
        });
    };

    const handleColorChanges = color => {
        setLabel({
            ...label,
            color: color.hex
        });
    };

    return (
        <form>
            <div>
                <h4>Create New Label</h4>
                <div>
                    <label>
                        Label Name:
                        <input
                            name='name'
                            id='name'
                            placeholder='label...'
                            onChange={handleChanges}
                            value={label.name}
                        />
                    </label>
                    <br />
                    {label.name && label.color ? (
                        <LabelPreviewColor>{label.name}</LabelPreviewColor>
                    ) : (
                        ''
                    )}
                    <label>
                        <div>
                            <Button id='PopoverLegacy' type='button'>
                                Choose Color
                            </Button>
                            <UncontrolledPopover
                            trigger="legacy"
                            placement="bottom"
                            target="PopoverLegacy"
                            >
                            <PopoverBody>
                                <CirclePicker
                                color={label.color}
                                colors={[
                                    '#75a9b6',
                                    '#575a7b',
                                    '#27213d',
                                    '#2c6049',
                                    '#d19c18',
                                    '#d42c08',
                                ]}
                                onChange={handleColorChanges}
                                width="130px"
                                />
                            </PopoverBody>
                            </UncontrolledPopover>
                        </div>
                    </label>
                    <Button color='primary' onClick={handleSubmit}>
                        Save
                    </Button>
                </div>
            </div>
        </form>
    )

}

export default CreateLabelForm;