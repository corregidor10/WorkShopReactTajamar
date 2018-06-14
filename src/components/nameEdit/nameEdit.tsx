import * as React from 'react';

interface IProps {
 
  initialUserName:string;  
  onNameUpdated:(newName: string)=>any;
}

interface IState {
    editingName: string;
   }

export class NameEditComponent extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  
    this.state = { editingName: this.props.initialUserName };
  }

 private onChange = (event) => {
    let newName=event.target.value;
    this.setState({ editingName: newName });
  }

 private onNameSubmit = ():void => {
    this.props.onNameUpdated(this.state.editingName);
  }

  public render() {
    return (
      <div>
        <label>Update Name:</label>
        <input value={this.state.editingName} onChange={this.onChange} />
        <input type="submit" value="Change" className="btn btn-default" onClick={this.onNameSubmit} />
      </div>
    );
  }
}
