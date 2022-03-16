import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import { deepOrange } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
    container: {
        // height: 'calc(100% - 150px)'
    },
    messageRow: {
        display: "flex"
    },
    messageRowRight: {
        display: "flex",
        justifyContent: "flex-end"
    },
    messageBlue: {
        position: "relative",
        marginLeft: "20px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#A8DDFD",
        width: "60%",
        //height: "50px",
        textAlign: "left",
        font: "400 .9em 'Open Sans', sans-serif",
        border: "1px solid #97C6E3",
        borderRadius: "10px",
        "&:after": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            borderTop: "15px solid #A8DDFD",
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            top: "0",
            left: "-15px"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            borderTop: "17px solid #97C6E3",
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            top: "-1px",
            left: "-17px"
        }
    },
    messageOrange: {
        position: "relative",
        marginRight: "20px",
        marginBottom: "10px",
        padding: "10px",
        backgroundColor: "#f8e896",
        width: "60%",
        //height: "50px",
        textAlign: "left",
        font: "400 .9em 'Open Sans', sans-serif",
        border: "1px solid #dfd087",
        borderRadius: "10px",
        "&:after": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            borderTop: "15px solid #f8e896",
            borderLeft: "15px solid transparent",
            borderRight: "15px solid transparent",
            top: "0",
            right: "-15px"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            borderTop: "17px solid #dfd087",
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            top: "-1px",
            right: "-17px"
        }
    },

    messageContent: {
        padding: 0,
        margin: 0
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
}))

const MessageLeft = (props, classes) => {
    const message = props.msg ? props.msg : "no message";
    return (
        <>
            <div className={classes.messageRow}>
                <div className={classes.messageBlue}>
                    <div>
                        <p className={classes.messageContent}>{message}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const MessageRight = (props, classes) => {
    const message = props.msg ? props.msg : "no message";
    return (
        <div className={classes.messageRowRight}>
            <div className={classes.messageOrange}>
                <p className={classes.messageContent}>{message}</p>
            </div>
        </div>
    );
};

function ChatDisplay(props) {
    const classes = useStyles();
    const { messages, selectedBot } = props
    return (
        <div className={classes.container}>
            {selectedBot ? messages.length ?
                messages.map(msg =>
                    <>
                        {MessageRight({ msg }, classes)}
                        {MessageLeft({ msg }, classes)}
                    </>
                ) :
                <Typography paragraph>
                    Type something to Start the chat
                </Typography> :
                <Typography paragraph>
                    Select a Bot from chat menu to start chatting
                </Typography>
            }

        </div>
    )
}
const mapStateToProps = ({ messageReducer }) => ({
    messages: messageReducer.messages,
    selectedBot: messageReducer.selectedBot
})
export default connect(mapStateToProps, null)(ChatDisplay)