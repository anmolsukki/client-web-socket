import React from 'react';

class Chat extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
        let text = this.refs.messageText.value;
        this.props.actions.send(text)
    }

    render() {

        let messageList = this.props.messages.map((message, index) => {
        return <li className="list-group-item" key={index}>{message}</li>
        })

        return (
            <div className="Container">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" placeholder="Type here to chat..." className="form-control" ref="messageText" />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </span>
                        </div>
                    </div>
                </form>
                <ul className="list-group">{messageList}</ul>
            </div>
        )
    }
}

export default Chat;
