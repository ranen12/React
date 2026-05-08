import { useRouter } from "next/router";

export default function Page() {
    const router =useRouter();
    const id = router.query.id
    return (
        <div>{id}번 상품 상세 페이지</div>
    )
}