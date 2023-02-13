import {useContext} from "react";
import {contentContext} from '../providers/ContentProvider';

export function useContent(){
    return useContext(contentContext)
}