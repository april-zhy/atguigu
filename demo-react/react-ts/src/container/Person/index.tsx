import { Component, ReactNode, useState } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/store";
// import { addPersonAction } from "../../redux/actions/person";

export interface IPerson {
  uid: string;
  name: string;
  age: number;
}
export interface IPersonProps {
  persons: Array<IPerson>;
  count: number;
  addPerson: (person: IPerson) => {};
}

class Person extends Component<IPersonProps> {
  private nameNode: HTMLInputElement | null = null;
  private ageNode: HTMLInputElement | null = null;

  constructor(props: IPersonProps) {
    super(props);
  }

  addPerson = () => {
    const name = this.nameNode!.value;
    const age = this.ageNode!.value as unknown as number;
    const personObj = { uid: nanoid(), name, age };
    this.props.addPerson(personObj);
  };

  render(): ReactNode {
    return (
      <div style={{ padding: "10px 15px" }}>
        <h2>Person Component</h2>
        <h3>上方组件求和值为：{this.props.count}</h3>
        <input
          ref={(c: HTMLInputElement) => (this.nameNode = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c: HTMLInputElement) => (this.ageNode = c)}
          type="number"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((p: IPerson) => {
            return (
              <li key={p.uid}>
                {p.name}--{p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    persons: state.personZHY.persons,
    count: state.countZHY.count,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addPerson: (person: IPerson) => dispatch(addPersonAction(person)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Person);
