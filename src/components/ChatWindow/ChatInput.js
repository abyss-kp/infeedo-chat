import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { saveMessage } from '../../store/actions/messageAction';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { drawerWidth } from '../../utils/constants';
const useStyles = makeStyles((theme) =>
({
    wrapForm: {
        display: "flex",
        justifyContent: "center",
        width: "85%",
        [theme.breakpoints.up('sm')]: {
            width: `calc(95% - ${drawerWidth}px)`,
        },
        margin: `${theme.spacing(0)} auto`,
        position: 'fixed',
        bottom: 0
    },
    wrapText: {
        width: "100%"
    },
    colorPrimary: {
        //margin: theme.spacing(1),
        color: theme.palette.primary
    },
})
);


const ChatInput = (props) => {
    const [message, setMessage] = useState('')
    const classes = useStyles();
    const saveData = () => {
        props.saveMessage(message, props.selectedBot)
        setMessage("")
    }
    return (
        <>
            <div className={classes.wrapForm} >
                <TextField
                    fullWidth
                    id="input-text"
                    className={classes.wrapText}
                    margin="normal"
                    color="primary"
                    multiline
                    maxRows={2}
                    onChange={e => setMessage(e.target.value || '')}
                    value={message}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                disabled={!message.length}
                                onClick={saveData}
                                size="small"
                                color="primary"
                            >
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </div>
        </>
    )
}
const mapStateToProps = ({ messageReducer }) => ({
    selectedBot: messageReducer.selectedBot
})
export default connect(mapStateToProps, { saveMessage })(ChatInput)


