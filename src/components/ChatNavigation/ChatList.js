import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import ChatItem from './ChatListItem';
import { BOTS, drawerWidth } from '../../utils/constants';
const useStyles = makeStyles((theme) => ({
    toolbar: {
        ...theme.mixins.toolbar,
        paddingTop: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
}));

export default function ChatList(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} >CHATS</div>
            <Divider />
            <List onClick={() => props.setMobileOpen ? props.setMobileOpen(false) : null}>
                {BOTS.map((name, index) => (
                    <React.Fragment key={name + index}>
                        <ChatItem name={name} />
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    )
}
