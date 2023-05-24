import { useRouter } from 'next/router'


export default function New(){
    const router = useRouter()
    const {link } = router.query


    return (
        <>
        <h2>Create an entry for the category: {link}</h2>
        </>
    )
}