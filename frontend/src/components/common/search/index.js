import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import "./index.scss";

export default function Search({ id = "search", placeholder = "e.g Apple, Celebrity, Technology", label = "Search", variant = "outlined", defaultValue = "", onValueChange }) {

    const [value, setValue] = useState(defaultValue);

    function onInputChange({ target }) {
        setValue(target.value);
        onValueChange(target.value)
    }

    return (
        <div className="search-wrapper">
            <TextField
                id={id}
                label={label}
                variant={variant}
                fullWidth
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
            />
        </div>
    )
}