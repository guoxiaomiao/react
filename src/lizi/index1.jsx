import React from 'react';
import ReactDOM from 'react-dom/client';
import Component from 'react'


// const root = ReactDOM.createRoot(document.getElementById('root'))
// const name = 'rjl'
// const element = <h1>hello,{name}</h1>

// const name = {
//     'firstName':'r',
//     'lastName':'jl',
// }
// function formatName(name){
//     return  name.firstName + name.lastName
// }
// const element = (
//     <h1>hello,{formatName(name)}</h1>
// )
// const element = <div tabIndex="0"></div>;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <h1>hello</h1>,
//     element
// )  

// toLocaleTimeString()根据本地时间把Date时间部分转为字符串
/*const root = ReactDOM.createRoot(document.getElementById('root'))
function tick(){
    const element = (
        <div>
            <h1>hello,world!</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
        
    )
    root.render(element)
}
setInterval(tick,1000)*/

// class Welcome extends React.Component{
//     render(){
//         return <h1>hello,world!</h1>
//     }
// }


// function Welcome(props){
//     return <h1>hello,{props.name}</h1>
// }
// const element = <Welcome name='rjl'/>


// class Welcome extends React.Component{
//     render(){
//         return <h1>hello,{this.props.name}</h1>
//     }
// }
// const element = <Welcome name='任嘉伦'/>

// class Welcome extends React.Component{
//     render(){
//        return <h1>hello,{this.props.name}</h1>
//     }
// }

/*function App(){
    return(
    <div>
        <Welcome name='rjl'/> 
        <Welcome name='rjl'/> 
        <Welcome name='rjl'/> 
    </div>
    ) 
}*/

/*class App extends React.Component{
    render(){
       return <div>
          <Welcome name='rjl'/> 
          <Welcome name='rjl'/> 
          <Welcome name='rjl'/> 
        </div>
    }
}
root.render(<App />)
*/





// function Btn(){
//     function clickMe(params) {
//         console.log(111)
//     }
//     return <button onClick={clickMe}>点我</button>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Btn/>)

// class Toggle extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             isToggleOn : true
//         }
//         //this.handleClick = this.handleClick.bind(this)
//     }
//     // handleClick(params) {
//     //     this.setState(state=>({
//     //         isToggleOn : !state.isToggleOn
//     //     }))
//     // }

//     handleClick = () =>{
//         this.setState(state => ({
//             isToggleOn : !state.isToggleOn
//         }))
//     }

//     render(){
//         return (
//             <button onClick={this.handleClick}>{this.state.isToggleOn?'on':'off'}</button>
//         )
//     }
// }
// root.render(<Toggle/>)

// function UserGreeting(props){
//     return <div>欢迎回来</div>
// }
// function GuestGreeting(props){
//     return <div>请登录</div>
// }
// function Greeting(props){
//     const isLogin = props.isLogin
//     if(isLogin){
//         return <UserGreeting/>
//     }else{
//         return <GuestGreeting/>
//     }
// }
// root.render(<Greeting isLogin={true} />)

// function UserGreeting(props){
//     return <div>欢迎回来</div>
// }
// function GuestGreeting(props){
//     return <div>请登录</div>
// }
// function LoginButton(props){
//     return <button onClick={props.onClick}>login</button>
// }
// function LogoutButton(props){
//     return <button onClick={props.onClick}>Logout</button>
// }
// function Greeting(props){
//     const isLogin = props.isLogin
//     if(isLogin){
//         return <UserGreeting/>
//     }else{
//         return <GuestGreeting/>
//     }
// }   
// class LoginPanel extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {isLogin : false}
//         this.loginHandleClick = this.loginHandleClick.bind(this)
//         this.logoutHandleClick = this.logoutHandleClick.bind(this)
//     }
//     loginHandleClick(){
//         this.setState({isLogin : true})
//     }
//     logoutHandleClick(){
//         this.setState({isLogin : false})
//     }
    
//     render(){
//         const isLogin = this.state.isLogin;
//         let button;
//         if(isLogin){
//             button = <LogoutButton onClick={this.logoutHandleClick}/>
//         }else{
//             button = <LoginButton onClick={this.loginHandleClick}/>
//         }
//         return (
//             <div>
//                 <Greeting isLogin={isLogin}/>
//                 {button}
//             </div>
            
//         )
//     }
// }
// root.render(<LoginPanel />)


// function MailBox(props){
//     const unreadMsg = props.unreadMsg;
//     return (
//         <div>
//             <p>hello</p>
//             {unreadMsg.length > 0 && 
//                 <p>你有{unreadMsg.length}封邮件未读</p>
//             }
//         </div>
//     )
// }
// const msg = ['react','vue',]
// root.render(<MailBox unreadMsg = {msg}/>)


// function Warning(props){
//     if(!props.warn){
//         return null
//     }
//     return <div>warning!</div>
// }
// root.render(<Warning warn = {true} />)

// function Warning(props){
//     if(!props.warn){
//         return null
//     }
//     return <div>warning</div>
// }

// class Page extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {isShow : true}
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState(state=>({
//             isShow : !state.isShow
//         }))
//     }

//     render(){
//         return (
//             <div>
//                 <Warning warn = {this.state.isShow}/>
//                 <button onClick={this.handleClick}>{this.state.isShow ? 'hide' : 'show'}</button>
//             </div>
            
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Page/>)

// const numbers = [ 1 , 2 , 3 , 4 , 5 ]
// const lists = numbers.map((number)=>
//     <li>{number}</li>
// )
// root.render(
//     <ul>{lists}</ul>
// )

//key
// function Lists(props){
//     const numbers = props.numbers ;
//     const list = numbers.map((number)=>
//         <li key = {number.toString()}>{number}</li>
//     )
//     return <ul>{list}</ul>
// }
// const numbers = [ 1 , 2 , 3 , 4]
// root.render(<Lists numbers={numbers}/>)



// function ListItem(props){
//     return <li>{props.value}</li>
// }


// function NumberList(props){
//     const numbers = props.numbers;
//     // const list = numbers.map((number)=>
//     //     <ListItem key={number.toString()} value={number} />
//     // )
//     // return <ul>{list}</ul>
//     return (
//         <ul>
//             {numbers.map((number)=>
//                 <ListItem key={number.toString()} value={number} />
//              )}
//         </ul>  
//     )
// }

// const numbers =[ 1 , 2 , 3 , 4]
// root.render(<NumberList numbers = {numbers}/>)


//key只在兄弟节点之间唯一
// function Blog(props){
//     const side = (
//         <ul>
//             {
//                 props.posts.map((post)=>
//                     <li key={post.id}>{post.title}</li>
//                 )
//             }
//         </ul>
//     )
//     const content = props.posts.map((post)=>
//         <div key={post.id}>
//             <p>{post.content}</p>
//         </div>
//     )
//     return(
//         <div>
//             {side}
//             <p>-------------------</p>
//             {content}
//         </div>
//     )
// }
// const posts = [
//     {id:1,title:'Vue',content:'hello,Vue'},
//     {id:2,title:'React',content:'hello,React'}
// ]
// root.render(<Blog posts = {posts} />)


// class NameFrom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {value : ''}
//         this.valChange = this.valChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     valChange(event){
//         this.setState({value : event.target.value})
//     }
//     handleSubmit(event){
//         alert('你输入的姓名是：'+ this.state.value )
//         event.preventDefault()
//     }
//     render (){
//         return(
//             <form onSubmit = {this.handleSubmit}>
//                 <label>姓名：<input type="text" value={this.state.value} onChange={this.valChange} placeholder='请输入你的姓名' /></label> 
//                 <input type="submit" value="提交"></input>
//             </form>
//         )
//     }

// }
// root.render(<NameFrom />)


// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('你喜欢的风味是: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择你喜欢的风味:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">葡萄柚</option>
//             <option value="lime">酸橙</option>
//             <option value="coconut">椰子</option>
//             <option value="mango">芒果</option>
//           </select>
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }
// root.render(<FlavorForm />)

// class Reservation extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isGoing: true,
//         numberOfGuests: 2
//       };
  
//       this.handleInputChange = this.handleInputChange.bind(this);
//     }
  
//     handleInputChange(event) {
//       const target = event.target;
//       const value = target.name === 'isGoing' ? target.checked : target.value;
//       const name = target.name;
  
//       this.setState({
//         [name]: value
//       });
//     }
  
//     render() {
//       return (
//         <form>
//           <label>
//             参与:
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange} />
//           </label>
//           <br />
//           <label>
//             来宾人数:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange} />
//           </label>
//         </form>
//       );
//     }
//   }
//   root.render(<Reservation/>)

// function BoilingVerdict (props) {
//     if(props.celsius >= 100){
//         return <p>The water would boil.</p>;
//     }else{
//         return <p>The water would not boil.</p>;
//     }
// }
// // class Calculator  extends React.Component {
// //     constructor(props){
// //         super(props);
// //         this.state = {temperature :''}
// //         this.handleChange = this.handleChange.bind(this)
// //     }
// //     handleChange(e){
// //         this.setState({temperature:e.target.value})
// //     }
// //     render(){
// //         const temperature = this.state.temperature;
// //         return(
// //             <fieldset>
// //                 <legend>Enter temperature in Celsius:</legend>
// //                 <input value={temperature} onChange = {this.handleChange} />
// //                 <BoilingVerdict celsius = {parseFloat(temperature)} />
// //             </fieldset>
// //         ) 
// //     }

// // }
//  const root = ReactDOM.createRoot(document.getElementById('root')) 
// // root.render(<Calculator />)

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
//   };

//   class TemperatureInput  extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {temperature:''}
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(e){
//         //this.setState({temperature:e.target.value})
//         this.props.onTemperatureChange(e.target.value);
//     }
//     render(){
//         //const temperature = this.state.temperature;
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return(
//             <fieldset>
//                 <legend>Enter temperature in  {scaleNames[scale]}:</legend>
//                 <input value={temperature} onChange={this.handleChange}/>

//             </fieldset>
//         )
//     }
//   }
//   class Calculator extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
//         this.state = {temperature:'',scale:'c'}
//     }
//     handleCelsiusChange(temperature){
//         this.setState({scale:'c',temperature})
//     }
//     handleFahrenheitChange(temperature){
//         this.setState({scale:'f',temperature})
//     }
//     render(){
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//         return(
//             <div>
//                 <TemperatureInput 
//                     scale='c' 
//                     temperature={celsius} 
//                     onTemperatureChange = {this.handleCelsiusChange}/>
//                 <TemperatureInput 
//                     scale='f' 
//                     temperature={fahrenheit} 
//                     onTemperatureChange = {this.handleFahrenheitChange}/>
//                 <BoilingVerdict celsius = {parseFloat(temperature)} />
//             </div>
//         )
//     }
//   }

  
//   function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
//   root.render(<Calculator />)
// function FancyBorder(props) {
//     return (
//         <div className={props.color}>
//             {props.children}
//         </div>
//     )
// }
// function WelcomeDialog(props) {
//     return(
//         <FancyBorder color = "blue">
//             <div>
//                 hello
//             </div>
//         </FancyBorder>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<WelcomeDialog/>)



//生命周期
// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {date : new Date()}
//     }
//     componentDidMount(){
//        this.timeId = setInterval(
//            ()=>this.tick()
//        ,1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timeId)
//     }

//     tick(){
//         this.setState({
//             date : new Date()
//         })
//     }
//     render(){
//         return(
//             <h1>it is :{this.state.date.toLocaleTimeString()}</h1>
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Clock/>)


// function SplitPane(props) {
//     return(
//         <div className='SplitPane'>
//             <div className='SplitPane-left'>
//                 {props.left}
//             </div>
//             <div className='SplitPane-right'>
//                 {props.right}
//             </div>
//         </div>
//     )
// }

// function App() {
//     return(
//         <SplitPane 
//             left = {
//                 // eslint-disable-next-line react/jsx-no-undef
//                 <Contacts />
//             }
//             right ={
//                 // eslint-disable-next-line react/jsx-no-undef
//                 <Chat />
//             }/>

//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)

// function FancyBorder (props) {
//     return(
//         <div className={props.color}>
//             {props.children}
//         </div>
//     )
// }
// function Dialog(props) {
//     return(
//         <FancyBorder color="blue">
//             <h1 className='Dialog-title'>
//                 {props.title}
//             </h1>
//             <p className='Dialog-msg'>
//                 {props.msg}
//             </p>
//         </FancyBorder>
//     )
// }
// function WelcomDialog(props) {
//     return(
//         <Dialog 
//             title = "Welcome" 
//             msg = "欢迎来到我的世界"
//         />
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<WelcomDialog/>)