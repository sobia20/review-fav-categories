import {useRouter} from 'next/router';

export default function Category() {
    const router = useRouter()
    const { link } = router.query;
return (
    <h1>{link}</h1>
)
}