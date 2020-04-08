import React, { Component } from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

interface State {
  invites: string[];
  opened: boolean;
}

export class Root extends Component<{}, State> {
  public readonly state: State = {
    invites: [],
    opened: false
  };

  public render() {
    return (
        <>
          <button onClick={this.toggle}>Open invites list</button>
          <Modal opened={this.state.opened} onClose={this.toggle}>
            <Invites
                invites={this.state.invites}
                onAdd={this.invite}
            />
          </Modal>
        </>
    );
  }

  private readonly toggle = (): void => {
    this.setState(state => ({ opened: !state.opened }));
  };

  private readonly invite = (name: string): void => {
    this.setState(({ invites }) => {

      return { invites: [...invites, name] };
    });
  };
}
