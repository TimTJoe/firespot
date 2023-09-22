import { RxUpdate } from "react-icons/rx"
import { Button, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"


function Update() {
    const [loading, setLoading] = useState(false)

    const handleUpdate = () => {
        setLoading(true)
    }

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    }, [loading])

    return (
        <Button
            onClick={handleUpdate}
            startIcon={loading ? <CircularProgress color="inherit" size={20} /> : <RxUpdate />}>
            Update
        </Button>)
}

export default Update