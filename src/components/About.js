// import {Component} from 'react'

// export class Child extends Component {
//     constructor(props){
//     super(props)
//         console.log("first constructor")
//     }

//     componentDidMount(){
//         console.log("first didmount")
//     }
//     render() {
//         console.log( "first render")
//       return (
//         <div>About</div>
//       )
//     }
//   }
//   export class Child2 extends Component {
//     constructor(props){
//     super(props)
//         console.log( " second constructor")
//     }

//     componentDidMount(){
//         console.log("second didmount")
//     }
//     render() {
//         console.log( " second render")
//       return (
//         <div>About</div>
//       )
//     }
//   }

//   export default class Parent extends Component {
//     constructor(){
//         super()
//         console.log("parent constructor")
//     }

//     componentDidMount(){
//         console.log("parent component dimount")
//     }
//   render() {
//     console.log("parent render")
//     return (
//       <div>

//         <Child />
//         <Child2 />
//       </div>
//     )
//   }
// }

import React, { useEffect, useState } from "react";

const Parent = () => {
	return <div>
    hii
    </div>;
};


export default Parent;
