import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { setSelectedBot } from '../../store/actions/messageAction'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    secondary: {
        '& .MuiListItemText-secondary': {
            // fontFamily: 'Cursive',
            color: 'green',
            fontSize: 10
        }
    }
}));
function ChatListItem(props) {
    const classes = useStyles();
    const { name } = props
    return (
        <div>
            <ListItem button onClick={(e) => {
                props.setSelectedBot(name)
            }}>
                <ListItemIcon>
                    <Avatar alt={name} src="https://material-ui.com/static/images/avatar/1.jpg" />
                </ListItemIcon>
                <ListItemText primary={name}>{name}</ListItemText>
                <ListItemText secondary="online" align="right" className={classes.secondary}></ListItemText>
            </ListItem>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    setSelectedBot: (bot) => dispatch(setSelectedBot(bot))

})
export default connect(null, mapDispatchToProps)(ChatListItem)