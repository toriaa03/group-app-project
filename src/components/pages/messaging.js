// function Title() {
//     return <p class="title">Messaging</p>
//   }


// class App extends React.Component {

//     render() {
//       return (
//         <div className="app">
//           <Title />
//           <MessageList />
//           <SendMessageForm />
//        </div>
//       )
//     }
//   }


//   class App extends React.Component {

//     constructor() {
//       super()
//       this.state = {
//          messages: "type here"
//       }
//     }

//     render() {
//       return (
//         <div className="app">
//           <MessageList messages={this.state.messages}/>
//           <SendMessageForm />
//        </div>
//       )
//     }
//   }


//   class MessageList extends React.Component {
//     render() {
//       return (
//         <ul className="message-list">
//           {this.props.messages.map(message => {
//             return (
//              <li key={message.id}>
//                <div>
//                  {message.senderId}
//                </div>
//                <div>
//                  {message.text}
//                </div>
//              </li>
//            )
//          })}
//        </ul>
//       )
//     }
//   }


//   class SendMessageForm extends React.Component {
//     render() {
//       return (
//         <form
//           className="send-message-form">
//           <input
//             onChange={this.handleChange}
//             value={this.state.message}
//             placeholder="Type your message here"
//             type="Messaging" />
//         </form>
//       )
//     }
//   }

//   render() {
//     return (
//       <form
//         onSubmit={this.handleSubmit}
//         className="send-message-form">
//         <input
//           onChange={this.handleChange}
//           value={this.state.message}
//           placeholder="Type your message and hit ENTER"
//           type="text" />
//     </form>
//     )
//   }


//   constructor() {
//     super()
//     this.state = {
//        message: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
// }


// class SendMessageForm extends React.Component {
//     constructor() {
//       super()
//       this.state = {
//         message: ''
//       }
//       this.handleChange = this.handleChange.bind(this)
//       this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleChange(e) {
//       this.setState({
//         message: e.target.value
//       })
//     }

//     handleSubmit(e) {
//       e.preventDefault()
//       this.props.sendMessage(this.state.message)
//       this.setState({
//         message: ''
//       })
//     }

//     render() {
//       return (
//         <form
//           onSubmit={this.handleSubmit}
//           className="send-message-form">
//           <input
//             onChange={this.handleChange}
//             value={this.state.message}
//             placeholder="Type your message and hit ENTER"
//             type="text" />
//         </form>
//       )
//     }
//   }