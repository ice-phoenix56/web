import Button from "../components/ui/Button";
import {useReducer} from 'react'
import Modal from "../components/Modal";

const Main = (props) => {
    const [modal, dispatch] = useReducer(reducer, {
        active: false,
        content: 'registration'
      });

    function reducer(state, action) {
        switch (action.type) {
            case 'modal':
                return {
                    ...state,
                    active: action.modal
                };
            case 'content':
                return {
                    ...state,
                    content: action.content
                };
            default:
                return state
        }
    }

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }

    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }

    return (
        <div className="container center-flex">
            
            <div onClick={() => openModal('authorization')}>
                <Button text='authorization' />
            </div>
            <div onClick={() => openModal('registration')}>
                <Button text='registration' />
            </div>
            <div>
                <Button text='recover password' />
            </div>
            
            <Modal modal={modalState}/>
        </div>
    );
};

export default Main;