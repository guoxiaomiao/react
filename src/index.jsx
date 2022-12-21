import React from "react";
import ReactDOM from "react-dom/client";
import Component from "react";
import { useState } from "react";

// import Contacts, {Contacts1} from "./components/Contacts";
// import Chat from "./components/Chat";

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">{props.left}</div>
//       <div className="SplitPane-right">{props.right}</div>
//     </div>
//   );
// }

// function App() {
//   return <SplitPane left={<Contacts />} right={<Chat />} />;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);


// function App(props) {
//     constructor(props){
//         super(props);
//         this.state = {"name":"张三"}
//     }
//     return (
//         <div>{this.state.name}</div>
//     )
// }

// const toLearn = ['Vue','React','webPack','Nodejs'] ;
// const TextComponent=()=><div>i am a function componet</div> ;
// class Index extends React.Component{
//     status = false;
//     renderFoot = () =><div>i am a footer</div>
//     render(){
//         return(
//             <div style={{marginTop:'60px'}}>
//                 { /* element 元素类型 */ }
//             <div>hello,world</div>
//             { /* fragment 类型 */ }
//             <React.Fragment>
//                 <div> 👽👽 </div>
//             </React.Fragment>
//             { /* text 文本类型 */ }
//             my name is alien 
//             { /* 数组节点类型 */ }
//             { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }
//             { /* 组件类型 */ }
//             <TextComponent/>
//             { /* 三元运算 */  }
//             { this.status ? <TextComponent /> : <div>三元运算</div> }
//             { /* 函数执行 */ } 
//             { this.renderFoot() }
//             <button onClick={ ()=> console.log( this.render() ) } >打印render后的内容</button>

//             </div>
//         )
//     }
// }


/*props传值*/
// function Child(props) {
//     const {sayFather,fatherSay} = props
//     return(
//         <div>
//             <p>我是子组件</p>
//             <p>父组件说：{fatherSay}</p>
//             <input type="text" onChange={(e)=>sayFather(e.target.value)} />
//         </div>
//     )
// }
// function Father() {
//     const [fatherSay,setFatherSay] = useState('')
//     const [childSay,setChildSay] = useState('')
//     return(
//         <div>
//             <p>我是父组件</p>
//             <p>子组件说：{childSay}</p>
//             <input type="text" onChange={(e)=>setFatherSay(e.target.value)} />
//             <Child fatherSay = {fatherSay} sayFather = {setChildSay}/>
//         </div>
//     )
// }
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Father />);


/**继承 */
// class Person extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {}
//         console.log('i am a person')
//     }
//     componentDidMount(){
//         console.log(111)
//     }
//     eat(){}
//     ddd(){   console.log('打豆豆')  /* 打豆豆 */ }
//     render(){
//         return(
//             <div>我是一个人</div>
//         )
//     }
// }
// class Programmer extends Person{
//     constructor(props){
//         super(props)
//         console.log('i am a Programmer')
//     }
//     componentDidMount(){
//         console.log(this)
//     }
//     code(){}
//     render(){
//         return(
//             <div>
//                 {super.render()}
//                 11111
//             </div>
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<Programmer />);


// class Index extends React.Component{
//     state={number:0}
//     handleClick = () => {
//         setTimeout(()=>{
//             this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback1', this.state.number)  })
//             console.log(this.state.number)
//             this.setState({ number:this.state.number + 1 },()=>{    console.log( 'callback2', this.state.number)  })
//             console.log(this.state.number)
//             this.setState({ number:this.state.number + 1 },()=>{   console.log( 'callback3', this.state.number)  })
//             console.log(this.state.number)
//         })
//     }
//     render(){
//         return(
//             <div>
//                 {this.state.number}
//                 <button onClick = {this.handleClick}>更新state</button>
//             </div>
            
//         )
//     }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Index/>)

// function Index(props) {

//     //const [num,setNum] = useState(0);
//     const [ num , setNum ]  = useState((

//     )=>{
//         if(props.a === 1) return Math.random() 
//        if(props.a === 2) return Math.ceil(Math.random() * 10 )
//        return Math.ceil(Math.random() * 100 )
//     }) 

//     return <div>{num}</div>
// }
// function CsState() {
//     this.state = {a:1}
//     return <div>
//             <Index/>
//         </div>

// }

function Index(props){
    const [ number , setNumber ] = React.useState(0)
    /* 监听 number 变化 */
    // React.useEffect(()=>{
    //     console.log('监听number变化，此时的number是:  ' + number )
    // },[ number ])
    const handerClick = ()=>{
        /* 批量更新 */
        setNumber(1) 
        console.log(number)
        /* 滞后更新 ，批量更新规则被打破 */
        setTimeout(()=>{
            setNumber(3) 
            console.log(number)
        })
       
    }
    // console.log(number)
    return <div>
        <span> { number }</span>
        <button onClick={ handerClick }  >number++</button>
        {/* <div1>
            <div2 name="sdasd"></div2> 向上抛一个事件，prop 传递给div3
            <div3></div3> 方法
        </div1> */}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(<Index/>)