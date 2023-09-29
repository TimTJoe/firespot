import { RxUpdate } from "react-icons/rx"
import { Button, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useFires } from "@providers/ProvideFire"
import fetchFire from "@helpers/fetchFire"


function Update() {
    const { setFires } = useFires()
    const [reload, setReload] = useState(false)


    useEffect(() => {
        if (reload) {
            setTimeout(() => {
                setReload(false)
            }, 3000);
        }
    }, [reload])

    return (
        <Button
            onClick={() => {
                setFires(fetchFire())
                setReload(true)
            }}
            startIcon={reload ? <CircularProgress color="inherit" size={20} /> : <RxUpdate />}>
            Reload
        </Button>)
}

export default Update