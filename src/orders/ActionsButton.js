import React from "react";
import './ActionsButton.css';
import {DeleteForever} from '@mui/icons-material';

const ActionsButton = ({order, onRemovePressed}) => (
    <div >
        <DeleteForever onClick={() => onRemovePressed(order)}/>
    </div>
)

export default ActionsButton;