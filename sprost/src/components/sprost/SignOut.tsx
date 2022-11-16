import { Auth, signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { BoxArrowRight } from "react-bootstrap-icons";
import { AuthContext } from "../Auth";

const SignIn = () => {
    const [ signingOut, setSigningOut ] = useState<boolean>(false);
    const auth = useContext(AuthContext);
    
    return <Button 
            variant="dark"
            disabled={signingOut}
            onClick={() => {
                setSigningOut(true);
                signOut(auth as Auth);
                setSigningOut(false);
            }}>
                <BoxArrowRight
                    className="mx-2" />
                Sign Out
    </Button>
}

export default SignIn;