import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';
import { Card, Content, Button, DropButton, MoreDiv } from './styles';

import { ReactComponent as More } from '../../assets/images/More.svg';

export default function DropDown(props) {
    const { width, options, uniqueKey, placement } = props
    const buttonRef = useRef(null);
    const popperRef = useRef(null);
    const [arrowRef, setArrowRef] = useState(null);
    const [showPopper, setshowPopper] = useState(false);
    const { styles, attributes } = usePopper(buttonRef.current, popperRef.current, {
        placement,
        modifiers: [
            {
                name: "arrow",
                options: {
                    element: arrowRef
                }
            },
        ]
    });

    const Popper = (
        <Card width={width} ref={popperRef} style={styles.popper} {...attributes.popper}>
            <div ref={setArrowRef} style={styles.arrow} id="arrow" />
            <Content >
                {options.map((option, i) => option !== null && option !== undefined ?
                    <DropButton key={`${10 + i}-${uniqueKey}-three-dots-menu`} onClick={option.buttonOnClick}>
                        {option.prefix}
                        <p style={{ marginLeft: "4px" }}>{option.content}</p>
                        {option.postfix}
                    </DropButton> : null)
                }
            </Content>
        </Card>
    )
    return (
        <div style={{ display: "flex" }}>
            <Button type='button' onClick={() => setshowPopper(!showPopper)} ref={buttonRef}>
                <MoreDiv>
                    <More />
                </MoreDiv>
            </Button>
            {showPopper ? Popper : null}
        </div>
    )
}

DropDown.propTypes = {
    width: PropTypes.string,
    placement: PropTypes.string,
        // 'auto' || 'auto-start' || 'auto-end'
        // || 'top' || 'top-start' || 'top-end'
        // || 'bottom' || 'bottom-start' || 'bottom-end'
        // || 'right' || 'right-start' || 'right-end'
        // || 'left' || 'left-start' || 'left-end',
    uniqueKey: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
};

DropDown.defaultProps = {
    width: '',
    placement: 'bottom-end',
    uniqueKey: '',
    options: [],
};

// popper placement: https://popper.js.org/docs/v2/constructors/#options
