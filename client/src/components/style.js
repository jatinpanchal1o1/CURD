import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
    appBar:{
        borderRadius: 15,
        display: 'flex',
        marginBottom: '23px',
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'white',
        backgroundColor:'red',
    },
    heading:{
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent:'center',
    },
}));