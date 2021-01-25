import React from "react";
import ReactDOM from "react-dom";
import { Page, Button, Toolbar, Row, Col } from "react-onsenui";
import { notification } from "onsenui";

import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, value: 0, op: "" };


    this.onClickVal = this.onClickVal.bind(this);
    this.onClickAC = this.onClickAC.bind(this);
    this.onClickPlas = this.onClickPlas.bind(this);
    this.onClickMinus = this.onClickMinus.bind(this);
    this.onClickMult = this.onClickMult.bind(this);
    this.onClickDiv = this.onClickDiv.bind(this);
    this.onClickEqu = this.onClickEqu.bind(this);
  }

  renderToolbar() {
    return (
      <Toolbar>
      <div className="center">電卓アプリ</div>
      </Toolbar>
    );
  }

  onClickVal(val) {
    var s = this.state;
    s.count = this.state.count * 10 + val;
    this.setState(s);
  }

  onClickAC() {
    var s = this.state;
    s.count = 0; 
    s.value = 0;
    s.op = "";

    this.setState(s);
  }

  onClickPlas(){
    var s = this.state;
    s.op = "+";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);

  }

  onClickMinus() {
    var s = this.state; 
    s.op = "-";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);

  }

  onClickMult() {
    var s = this.state;
    s.op = "*";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }

  onClickDiv() {
    var s = this.state;
    s.op = "/";
    s.value = this.state.count;
    s.count = 0;
    this.setState(s);
  }

  onClickEqu() {
    var s = this.state;

    if(s.op == "+"){
      s.count = s.value + s.count;
    }

    if(s.op == "-"){
      s.count = s.value - s.count;
    }

    if(s.op == "*"){
      s.count = s.value * s.count;
    }

    if(s.op == "/"){
      s.count = s.value / s.count;
    }

    s.op = "";
    this.setState(s);
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <div className="App">
          <Col>
              <Row>
                <Col className="Box">{this.state.count}</Col>
              </Row>
              <Row>
                <Col><Button class="button" onClick={() => this.onClickAC()}>AC</Button></Col>
              </Row>
              <Row>
                <Col><Button class="button" onClick={() => this.onClickVal(7)}>7</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(8)}>8</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(9)}>9</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickDiv()}>÷</Button></Col>
              </Row>
              <Row>
                <Col><Button class="button" onClick={() => this.onClickVal(4)}>4</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(5)}>5</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(6)}>6</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickMult()}>×</Button></Col>
              </Row>
              <Row>
                <Col><Button class="button" onClick={() => this.onClickVal(1)}>1</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(2)}>2</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(3)}>3</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickMinus()}>-</Button></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col><Button class="button" onClick={() => this.onClickVal(0)}>0</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickEqu()}>=</Button></Col>
                <Col><Button class="button" onClick={() => this.onClickPlas()}>+</Button></Col>
              </Row>
          </Col>
        </div>
      </Page>
    );
  }
}
