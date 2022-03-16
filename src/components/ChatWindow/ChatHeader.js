import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    primary: {
        '& .MuiListItemText-primary': {
            fontFamily: 'Cursive',
            fontWeight: 'bold',
            fontSize: '20px'
        }
    }
}));
export default function ChatHeader(props) {
    const classes = useStyles();
    let { name } = props
    return (
        <div>
            <List >
                <ListItem >
                    <ListItemIcon>
                        <Avatar alt={name} src="https://material-ui.com/static/images/avatar/1.jpg" />
                    </ListItemIcon>
                    <ListItemText primary={name} className={classes.primary}>{name}</ListItemText>
                </ListItem>
            </List>
        </div>
    )
}
