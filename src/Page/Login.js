import {Card} from "@mui/material";

const Login = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh"
            }}
        >
            <Card variant="outlined" sx={{ width: '320px' }}>
                <h1>Hello</h1>
            </Card>
        </div>
        )
}

export default Login;
