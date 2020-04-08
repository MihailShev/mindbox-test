import React, { Component, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { Close } from "../Close";
import "./style.css";

const DEFAULT_TRANSITION_TIMEOUT = 300;

interface Props {
    opened: boolean;
    onClose: () => void;
    transitionTimeout?: number;
}

export class Modal extends Component<Props> {

    public render(): ReactNode {
        const {
            opened,
            onClose,
            transitionTimeout = DEFAULT_TRANSITION_TIMEOUT,
            children
        } = this.props;

        return (
            <CSSTransition
                classNames={{
                    enter: "modal_enter",
                    enterActive: "modal_enter-active",
                    enterDone: "modal_enter-done",
                    exit: "modal_exit",
                    exitActive: "modal_exit-active",
                    exitDone: "modal_exit-done"
                }}
                in={opened}
                timeout={transitionTimeout}
            >
                <div className="modal">
                    <div className="modal--content">
                        <Close onClick={onClose}/>
                        {children}
                    </div>
                </div>
            </CSSTransition>
        );
    }
}
