// @flow

const drawerWidth = 240;

const styles = (theme: Object): Object => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

export default styles;
