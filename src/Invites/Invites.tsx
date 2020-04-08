import React, { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import './style.css';

const EMPTY = '';

interface Props {
    invites: string[];
    onAdd: (name: string) => void;
}

export const Invites: FC<Props> = ({ invites, onAdd }) => {
    const [name, setName] = useState(EMPTY);

    const handleChangeName = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
        },
        []
    );

    const handleSubmit = useCallback(() => {
        onAdd(name);
    }, [name, onAdd]);

    useEffect(() => {
        setName(EMPTY);
    }, [invites]);

    return (
        <div className="invites">
            <div className="invites--form">
                <input
                    className="invites--form-input"
                    onChange={handleChangeName}
                    type="text"
                    value={name}
                />
                <button className="invites--form-submit" onClick={handleSubmit}>
                    Invite
                </button>
            </div>
            <div className="invites--delimiter"/>
            <ul className="invites--items">
                {invites.map((name, i) => (
                    <li className="invites--item" key={`${i}${name}`}>{name}</li>
                ))}
            </ul>
        </div>
    );
};
