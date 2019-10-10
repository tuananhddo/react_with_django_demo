import React, { Component } from 'react';
export class Customrow extends Component {
  state = {
    pointerBeforeReferenceNode: []
  };

  render() {
    return (
      <div>
          <div> Number {this.props.value}</div>
          <div>This is DataRow</div>
      </div>
    );
  }
}
export class Customrow2 extends Customrow {
  state = {
    pointerBeforeReferenceNode: []
  };
  render() {
    return (

      <div>
          <div> Number {this.props.value}</div>
          <div>This is NotInheritRow</div>
      </div>
    );
  }
}

export class TableOfUs extends Component{

    //Solution1
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
         <Customrow value={number}></Customrow>
        );
        listItems.push(<Customrow2></Customrow2>)
        return(
            <div>{listItems}</div>
        )
    // }
    // #Solution2
    //     render() {
    //
    //     var rows = [];
    //     for (var i = 0; i < 2; i++) {
    //         rows.push(
    //             <Customrow></Customrow>
    //         );
    //     }
    //     return(
    //         <div>{rows}</div>
    //     )
    }


}
export default TableOfUs;
