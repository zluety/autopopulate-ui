import { FunctionComponent, ReactPropTypes } from 'react';

import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import PropTypes from "prop-types";
const stackTokens: Partial<IStackTokens> = { childrenGap: 20 };

import "./SearchInput.css";

interface Props {
    fn: any
}

export const SearchInput: FunctionComponent<Props> = ({ fn }: Props) => {
    return (
        <Stack tokens={stackTokens}>
            <SearchBox
                placeholder="Search"
                onChange={fn}
                onSearch={newValue => console.log('value is ' + newValue)} />
        </Stack>
    )

}

// export default class SearchInput extends PureComponent {
//     static propTypes = {
//         textChange: PropTypes.func
//     };

//     handleChange = event => {
//         this.props.textChange(event);
//     };

//     render() {
//         return (
//             <div className="component-search-input">
//                 <div>
//                     <input onChange={this.handleChange} />
//                 </div>
//             </div>
//         );
//     }
// }