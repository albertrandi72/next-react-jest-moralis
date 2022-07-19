import { useMoralis } from "react-moralis";

const Account = () => {

    const { authenticate, account, logout } = useMoralis();
    const handleConnect = () => {
        authenticate()
    }
    const handleDisconnect = () => {
        logout()
    }
    return (
        <>
            {account == null && <button onClick={handleConnect}>connect</button>}
            {account && <button onClick={handleDisconnect}>disconnect</button>}
            <p>{account}</p>
        </>
    )
}

export default Account