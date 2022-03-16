import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';
import { setSelectedBot } from '../../store/actions/messageAction'
function ChatListItem(props) {
    const { name } = props
    return (
        <div>
            <ListItem button  onClick={(e) => {
                props.setSelectedBot(name)
            }}>
                <ListItemIcon>
                    <Avatar alt={name} src="https://material-ui.com/static/images/avatar/1.jpg" />
                </ListItemIcon>
                <ListItemText primary={name}>{name}</ListItemText>
                <ListItemText secondary="online" align="right"></ListItemText>
            </ListItem>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    setSelectedBot: (bot) => dispatch(setSelectedBot(bot))

})
export default connect(null, mapDispatchToProps)(ChatListItem)