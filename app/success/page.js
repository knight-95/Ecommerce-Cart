import Link from "next/link";

export default function SuccessPage() {
    return (
        <div>
        <h1>Payment Successful</h1>
            Nice!
            <Link href={'/'}>Back home</Link>
        </div>
    )
}