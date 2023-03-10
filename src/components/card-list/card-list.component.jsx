import { Component } from "react";
import "./card-list.styles.css";

import Card from "../card/Card.component";

class CardList extends Component {
  render() {
    console.log("render from cardlist");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
