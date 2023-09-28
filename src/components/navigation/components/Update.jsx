import { RxUpdate } from "react-icons/rx"
import { Button, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useFires } from "@providers/ProvideFire"


function Update() {
    const { reload, handleReload } = useFires()

    useEffect(() => {
        if (reload) {
            setTimeout(() => {
                handleReload(false)
            }, 3000);
        }
    }, [reload])

    return (
        <Button
            onClick={handleReload}
            startIcon={reload ? <CircularProgress color="inherit" size={20} /> : <RxUpdate />}>
            Reload
        </Button>)
}

export default Update