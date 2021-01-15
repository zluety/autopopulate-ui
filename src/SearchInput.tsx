import { FunctionComponent } from 'react';

import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import "./SearchInput.css";

interface Props {
    handleChange: any
}

export const SearchInput: FunctionComponent<Props> = ({ handleChange }: Props) => {
    return (
        <SearchBox
            placeholder="Search"
            onChange={handleChange}
            onSearch={newValue => console.log('value is ' + newValue)} />
    )
};